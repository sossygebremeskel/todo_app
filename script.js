const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

document.addEventListener("DOMContentLoaded", getLocalTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", handleTodoActions);
filterOption.addEventListener("change", filterTodo);



































// Handle complete, edit, and delete actions
function handleTodoActions(e) {
    const item = e.target;
    const todo = item.parentElement;

    // Complete Task
    if (item.classList.contains("complete-btn")) {
        todo.classList.toggle("completed");
        updateLocalTodos(todo); // Update completion status in localStorage
    }

    // Edit Task
    if (item.classList.contains("edit-btn")) {
        const todoText = todo.querySelector(".todo-item");
        if (todoText.isContentEditable) {
            todoText.contentEditable = "false";
            item.innerHTML = '<i class="fas fa-edit"></i>';
            updateLocalTodos(todo); // Update task content in localStorage
        } else {
            todoText.contentEditable = "true";
            item.innerHTML = '<i class="fas fa-save"></i>';
            todoText.focus();
        }
    }

    // Delete Task
    if (item.classList.contains("trash-btn")) {
        removeLocalTodos(todo);
        todo.remove();
    }
}
