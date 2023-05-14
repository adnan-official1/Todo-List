const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const totalTasks = document.getElementById("total-tasks");
let tasksCount = 0;

function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    tasksCount++;

    const todoItem = document.createElement("li");
    const checkbox = document.createElement("input");
    const todoTextSpan = document.createElement("span");
    const deleteBtn = document.createElement("button");

    checkbox.type = "checkbox";
    checkbox.addEventListener("change", toggleTodo);

    todoTextSpan.innerText = todoText;

    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", deleteTodo);

    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoTextSpan);
    todoItem.appendChild(deleteBtn);

    todoList.appendChild(todoItem);
    totalTasks.innerText = tasksCount;
    todoInput.value = "";
  }
}

function toggleTodo() {
  const todoItem = this.parentNode;
  if (this.checked) {
    todoItem.classList.add("checked");
  } else {
    todoItem.classList.remove("checked");
  }
}

function deleteTodo() {
  const todoItem = this.parentNode;
  todoList.removeChild(todoItem);
  tasksCount--;
  totalTasks.innerText = tasksCount;
}

addBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addBtn.click();
  }
});