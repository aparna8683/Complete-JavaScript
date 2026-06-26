const taskInput= document.getElementById("todo-text")
const addButton=document.getElementById("add-todo")
const todoList=document.getElementById("todo-list")
let todos=[]
function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos))
}
function getTodos(){
    const savedTodos=localStorage.getItem("todos")
    if(savedTodos){
        return JSON.parse(savedTodos)
    }
    return []
}

function deleteTodo(index){
    todos.splice(index, 1)
    saveTodos();
    renderTodos()
}  

function toggleTodo(index){
    todos[index].isCompleted=!todos[index].isCompleted
    saveTodos();
    renderTodos()
} 
todos=getTodos()
renderTodos()
let editIndex=null

function editTodo(index){
    editIndex=index
    addButton.textContent="Update Todo"
    taskInput.value=todos[index].text
    
}


function renderTodos(){
    todoList.innerHTML=""
    
    todos.forEach((todo, index)=>{
        const li=document.createElement("li")
                let displaytext
        if(todo.isCompleted){
            displaytext="✓ "
    }
            else{
                displaytext=""
            }
        li.innerHTML=`${displaytext}${todo.text} <button onclick="deleteTodo(${index})">Delete</button> 

        <button onclick="toggleTodo(${index})">Completed?
        
        </button>
        <button onclick="editTodo(${index})">Edit Todo</button>`
        
        todoList.appendChild(li)

    })
    

}
addButton.addEventListener("click",function(){
    const taskValue=taskInput.value.trim()
    if(taskValue===""){
        return
    }
    if(editIndex!==null){
        todos[editIndex].text=taskValue
        editIndex=null
        addButton.textContent="Add Todo"
    } else {
        todos.push({
            text: taskValue,
            isCompleted: false
        })
    }
    taskInput.value=""
    saveTodos()
    renderTodos()
})
