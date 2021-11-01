const todoForm = document.querySelector("#todo");
const todoInput = document.querySelector("#todo input");
const todoUl = document.querySelector("#todoList")

let todoList = []

function handleTodoPushTodata() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

function handleTodoRemove(e) {
    const todoRemove = e.target.parentElement;
    todoRemove.remove();
    todoList = todoList.filter((item) => item.id !== parseInt(todoRemove.id))    
    handleTodoPushTodata()
}

function handleTodoAppend(todoWrited) {
    todoUl.classList.remove("hidden")
    const li = document.createElement("li");
    li.id = todoWrited.id;
    const span = document.createElement("span");
    span.innerText = todoWrited.text;
    const button = document.createElement("button");
    button.innerText = "×";

    todoUl.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);

    button.addEventListener("click", handleTodoRemove);
}

function handleTodoSubmit(e) {
    e.preventDefault();
    const todoWrited = todoInput.value;
    todoInput.value = "";

    const newTodoWrited = {
        text: todoWrited,
        id: new Date().getTime()
    }

    todoList.push(newTodoWrited)
    handleTodoAppend(newTodoWrited);
    handleTodoPushTodata()
}

todoForm.addEventListener("submit", handleTodoSubmit)

const todoSavedData = JSON.parse(localStorage.getItem("todoList"))

if (todoSavedData) { //존재하면
    todoList = todoSavedData;
    todoSavedData.forEach(handleTodoAppend);
}