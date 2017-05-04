import { getTemplate } from 'templates';
import { loadEvents, addEvent } from 'userController'

const $container = $('#container');

export function showEvents(){
    if(localStorage.getItem('btn-logout')) {
    
        Promise.all([
        getTemplate('events'),
        loadEvents()
        ])
        .then(([template, events]) => {
            console.log(events);
            $container.html(template(events));
    })
    } else {
        alert('You must be logged in to see your events!');
        location.hash = '#/home';
    }
}

export function createEvent() {
const eventTitle = $('#event-title').val();
const eventDescription = $('#event-description').val();
const eventCategory = $('#event-category').val();
const eventDate = $('#event-date').val();
const eventUsers = $('#event-users').val().split(/\s*,\s*/);
    Promise.all([
        addEvent(eventTitle, eventCategory, eventDescription, eventDate, eventUsers),
        getTemplate('events'),
        loadEvents()
    ])
    .then(([result, template, events]) => {
            $container.html(template(events));
            console.log(result);
            location.href = '#/events';
        })
    .catch(error => alert(error.responseText));
}