import * as data from 'data';
import encryptor from 'encryptor';
import router from 'router';

const LOCALSTORAGE_AUTH_KEY_NAME = 'authKey';
const AUTH_KEY_HEADER_NAME = 'x-auth-key'; //TO FIX 
const container = $('#container');
// const todoText = $('#todo-text').val();
// const todoCategory = $('#todo-category').val();
const eventTittle = $('#event-title').val();
const eventDescription = $('#event-description').val();
const eventCategory = $('#event-category').val();
const eventUsers = $('#event-users').val();

export function loadTodos() {
    // const headername = AUTH_KEY_HEADER_NAME;
    const headervalue = localStorage.getItem('LOCALSTORAGE_AUTH_KEY_NAME');
    return Promise.resolve(data.getTodos(headervalue));
//         .then(result => {
//             console.log(result);
//             return result;
//             // alert('Success')
//         },
//         errorMsg => alert(Error + JSON.stringify(errorMsg)));
}

export function addTodo(todoText, todoCategory) {
    const headervalue = localStorage.getItem('LOCALSTORAGE_AUTH_KEY_NAME');
    data.postTodo(headervalue, todoText, todoCategory)
    .then(result => console.log(result),
        errorMsg => alert(errorMsg.responseText))
}

export function loadEvents() {
    const headervalue = localStorage.getItem('LOCALSTORAGE_AUTH_KEY_NAME');
    return Promise.resolve(data.getEvents(headervalue));
}

export function addEvent(eventTitle, eventCategory, eventDescription, eventDate, eventUsers) {
    const headervalue = localStorage.getItem('LOCALSTORAGE_AUTH_KEY_NAME')
    data.postEvent(headervalue, eventTitle, eventCategory, eventDescription, eventDate, eventUsers)
        .then(result => console.log(result),
        errorMsg => alert(errorMsg.responseText))
}

export function login() {
    const username = $('#input-username').val();
    const password = $('#input-password').val();
    const passHash = encryptor.encrypt(password);
    data.login(username, passHash)
        .then(result => {
            console.log(result);
            localStorage.setItem('LOCALSTORAGE_AUTH_KEY_NAME', result.result.authKey);
            localStorage.setItem('btn-logout', 'true');
            localStorage.setItem('username', result.result.username)
            $('#btn-login').addClass('hidden');
            $('#btn-register').addClass('hidden');
            $('#btn-logout').removeClass('hidden');
            $('#input-username').addClass('hidden');
            $('#input-password').addClass('hidden');
            location.hash = '#/home';
            alert('Successfully logged in!')},
        errorMsg => alert(errorMsg.responseText));
}

export function register() {
    const username = $('#input-username').val();
    const password = $('#input-password').val();
    const passHash = encryptor.encrypt(password);
    data.register(username, passHash)
        .then(result => 
            login(username, passHash),
        errorMsg => alert(errorMsg.responseText));
}

export function logout() {
    localStorage.clear();
    $('#btn-login').removeClass('hidden');
    $('#btn-register').removeClass('hidden');
    $('#btn-logout').addClass('hidden');
    $('#input-username').removeClass('hidden');
    $('#input-password').removeClass('hidden');
    alert('Successfully logged out');
    location.hash = '#/home';
}