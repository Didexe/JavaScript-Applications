import * as requester from 'requester';

export function getTodos(headervalue) {
    const header = {
        'x-auth-key': headervalue
    }
    return requester.get('api/todos', header)
}

export function getEvents(headervalue) {
    const header = {
        'x-auth-key': headervalue
    }
    return requester.get('api/events', header)
}

export function postEvent(headervalue, title, category, description, date, users) {
    const header = {
        'x-auth-key': headervalue
    }

    const body = {
        title,
        category,
        description,
        date,
        users
    };
    return requester.post('api/events', body, header);
}

export function postTodo(headervalue, text, category) {
    const header = {
        'x-auth-key': headervalue
    };
    const body = {
        text,
        category
    };
    return requester.post('api/todos', body, header);
}

export function changeTodo(headervalue, state, text) {
    const header = {
        'x-auth-key': headervalue
    }
    body = {
        state
    }
    return requester.put('api/todos', bosy, header);
} 

export function login(username, passHash) {
    const body = {
        username,
        passHash
    };
    return requester.put('api/users/auth', body)
}

export function register(username, passHash) {
    const body = {
        username,
        passHash
    };
    return requester.post('api/users', body)
}
