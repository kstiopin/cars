export const defaultFetch = url => fetch(`../api/${url}`, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}).then(resp => resp.json());