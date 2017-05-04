// import { jquery } from 'jquery';
import { displayGreeting } from 'display';
import * as userController from 'userController';
import * as eventsController from 'eventsController';
import * as todosController from 'todosController';
import { showForm, hideForm, checkButtons, getId } from 'helpers';
// import { Navigo } from 'router';

// $(() => {
const router = new Navigo(null, false);
// Global event listeners
$('body').on('click', '#btn-create-todo', () => todosController.createTodo());
$('body').on('click', '#btn-create-event', () => eventsController.createEvent());
$('body').on('click', '#btn-edit-todo', () => todoController.editTodo());
// $('body').on('dblclick', '.todo', function(e) { todosController.editTodo(e)});
$(document).ready(checkButtons())

router
    .on({
        'todos': () => todosController.showTodos(),
        'todos/:id': (params) => getId(params.id),
        'events': () =>  eventsController.showEvents(),
        // 'events/:id': (params) => getId(params.id),
        'register': () => userController.register(),
        'login': () => userController.login(),
        'logout': () => userController.logout(),
        '*': () => displayGreeting(),
    })
    // .on('todos', () => display('Hello, User. This is your ToDo list!'))
    // .on('events', () => display('Hello, User. This is your Events list!'))
    // .on('*', () => display('Hello, User. Please log in to see your lists!'))
    // .resolve();

// })