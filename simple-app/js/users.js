function getUsers() {
    return fetch(`https://jsonplaceholder.typicode.com/users/`)
        .then(response => response.json())
}
function getUser(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
}
function buildUser(user) {
    const node = document.createElement('div');
    node.classList.add('item');
    node.innerHTML = `
        <span>${user.name}</span>
        <span>${user.email}</span>
    `;
    return node;
}

async function loadUsersSectionData() {
    const users = await getUsers();
    const nodes = users.map(user => buildUser(user));
    const gallery = document.getElementById('user_gallery');
    gallery.innerHTML = '';
    nodes.forEach(node => gallery.appendChild(node));
}