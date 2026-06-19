const taskInput= document.getElementById("todo-text")
const addButton=document.getElementById("add-todo")
const todoList=document.getElementById("todo-list")
let todos=[]
function renderTodos(){
    todoList.innerHTML=""
    todos.forEach(function(todo){
        const li=document.createElement("li")
        li.innerText=todo
        todoList.appendChild(li)

    })
    

}
addButton.addEventListener("click",function(){
    const taskValue=taskInput.value
    todos.push(taskValue)
    console.log(todos)
    taskInput.value=""
    renderTodos()
})
