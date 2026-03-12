let todos = [];

function renderTodos() {
    let todoListHTML = '';

    for (let i = 0; i < todos.length; i++) {
        let todo = todos[i];
        const html = `<p>${todo} <button onclick="todos.splice(${i},1) ;
        renderTodos();
        "> Delete </button></p>`;

        todoListHTML += html;
    }

    document.querySelector('.todos').innerHTML = todoListHTML;
}


function addTodo() {
    const inputElement = document.querySelector(".Todo-value");
    const val = inputElement.value;

    todos.push(val);

    inputElement.value = '';

    renderTodos(); // re-render after adding
}