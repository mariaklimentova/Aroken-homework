import { getTodosFromLocalStorage } from "./storage.js"
import { renderTodos, initTodoHandlers } from "./todo-dom.js"



const todos = getTodosFromLocalStorage() || [];

document.addEventListener("DOMContentLoaded", () => {
  renderTodos(todos);
  initTodoHandlers(todos);
});
