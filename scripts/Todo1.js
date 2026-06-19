let todos = [
    {
        name:'Make dinner',
        dueDate:'202220-2--2'
    }
    ,
    {
        name:'Make dinner',
        dueDate:'202220-2--2'
    }
];

function renderTodos() {
    let todoListHTML = '';

    for (let i = 0; i < todos.length; i++) {
        let todo = todos[i];
        const html = `<p>${todo} <button onclick="todos.splice(${i},1) ;
        renderTodos();
        "> Delete </button></p>`;

        todoListHTML += html;
    }

    document.querySelector('.todos').innerHTML = todoListHTML[0];
    document.querySelector('.todo-due').innerHTML=todoListHTML[1];
}


function addTodo() {
    const inputElement = document.querySelector(".Todo-value");
    const inlutDate=document.querySelector()
    const val = inputElement.value;

    todos.push(val);

    inputElement.value = '';

    renderTodos(); // re-render after adding
}    
