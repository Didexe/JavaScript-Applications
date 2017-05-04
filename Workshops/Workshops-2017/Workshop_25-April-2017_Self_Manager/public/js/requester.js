function request(url, type, body, headers) {
    return new Promise((resolve, reject) => $.ajax({
        url,
        type,
        contentType: 'application/json',
        data: body,
        headers,
        success: resolve,
        error: reject
    }));
}

export function get(url, header) {
    return request(url, 'GET', '', header)
}

export function post(url, body, headers = {}) {
    return request(url, 'POST', JSON.stringify(body), headers)
}

export function put(url, body, headers = {}) {
    return request(url, 'PUT', JSON.stringify(body), headers)
}
