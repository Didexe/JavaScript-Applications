import * as data from 'data';
import { load as loadTemplate } from 'templates';
// import 'cryptojs';

const $appContainer = $('#app-container');

const LOCALSTORAGE_AUTH_KEY_NAME = 'authkey';
const AUTH_KEY_HEADER = 'x-auth-key';

export function get(params) {
    const { category } = params;
}

loadTemplate('auth')
    .then(template => { 
        $appContainer.html(template())
});

// console.log(Crypto)
export function login() {
    const username = $('#input-username').val();
    const password = $('#input-password').val();
    const passHash = password; //hash me
    
    data.login(username, passHash)
        .then(
            result => { console.log(result);
            location.href = '#/home';
        },
            errorMsg => console.log(errorMsg));
}

export function register() {
    const username = $('#input-username').val();
    const password = $('#input-password').val();
    const passHash = password; //hash me
    
    data.register(username, passHash)
        .then(
            result => login()),
            errorMsg => console.log(errorMsg));
}

export function logout() {

}