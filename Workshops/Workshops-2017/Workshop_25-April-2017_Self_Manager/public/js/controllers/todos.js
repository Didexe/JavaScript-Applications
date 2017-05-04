import { getTemplate } from 'templates';
import { loadTodos, addTodo } from 'userController';
// import * as data from 'data';

const $container = $('#container');

export function showTodos() {
    if (localStorage.getItem('btn-logout')) {
    Promise.all([
        getTemplate('todos'),
        loadTodos()
        ])
        .then(([template, todos]) => {
            $container.html(template(todos));
            console.log(todos);
        });
    } else {
        alert('You must be logged in to see your events!');
        location.hash = '#/home';
    }
}

// export function showTodos() {
//     const userKey = localStorage.getItem('LOCALSTORAGE_AUTH_KEY_NAME');
    
//     Promise.all([
//         getTemplate('todos'),
//         data.getTodos(userKey)
//         ])
//         .then(([template, result]) => {
//             $container.html(template(result));
//             console.log(result);
//         });
// }

export function createTodo() {
const todoText = $('#todo-text').val();
const todoCategory = $('#todo-category').val();
    Promise.all([
        addTodo(todoText, todoCategory),
        getTemplate('todos'),
        loadTodos()
    ])
    .then(([result, template, todos]) => {
            $container.html(template(todos));
            console.log(todos);
            location.href = '#/todos';
        });
}

export function editTodo() {
    const todoId = localStorage.getItem('todoId')
    const text = $('.text').val();
}