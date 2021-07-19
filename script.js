const todoInput = document.querySelector(".newTask");
const todoButton = document.querySelector(".addTask");
const todoList = document.querySelector(".listArea");


todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCompleteTodo);

function addTodo(event) {
    event.preventDefault()

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;

    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";

    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

}

function changebackground() {
    document.getElementsByClassName("todo").style.backgroundColor = 'green';
}

const changeColor = document.querySelector(".todo");

function deleteCompleteTodo(event) {
    const item = event.target;
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }
}
