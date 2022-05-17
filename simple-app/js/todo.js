function getTodos() {
    return fetch(`https://jsonplaceholder.typicode.com/todos/`)
        .then(response => response.json())
}
function getTodo(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
}

function buildTodo(todo) {
    const node = document.createElement('li');
    const completed = todo.completed ? 'checked' : '';

    node.innerHTML = `
        <input type="checkbox" ${completed}>
        <span>${todo.title}</span>
    `;
    return node;
}

async function loadTodoSectionData() {
    const todos = await getTodos();
    const nodes = todos.map(todo => buildTodo(todo));
    const todoList = document.getElementById('todo_list');
    todoList.innerHTML = '';
    nodes.forEach(node => todoList.appendChild(node));
}