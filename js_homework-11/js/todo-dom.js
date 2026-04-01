import { todoKeys } from "./constants.js";
import {
  completeTodoById,
  createTodo,
  deleteTodoById,
} from "./todo-service.js";
import { setTodosToLocalStorage } from "./storage.js";

const formElement = document.querySelector(".form");
const inputElement = document.querySelector(".input");
const todosContainer = document.querySelector(".todos");

const createTodoElement = todo => {
  const todoTask = document.createElement("li");
  todoTask.classList.add("todo");
  todoTask.dataset.id = todo[todoKeys.id];
  todoTask.innerHTML = `<div class="todo-text">${todo[todoKeys.text]}</div>
     <div class="todo-actions">
      <button class="button-complete button">&#10004;</button>
      <button class="button-delete button">&#10006;</button>
    </div>`;
  return todoTask;
};

export const renderTodos = (todos) => {
  todosContainer.innerHTML = "";
  todos.forEach(todo => {
    const todoElement = createTodoElement(todo);
    if (todo[todoKeys.is_completed]) {
      todoElement.classList.add("completed");
    }
    todosContainer.prepend(todoElement);
  });
};

const handleCreateTodo = (todos, text) => {
  const todo = createTodo(todos, text);
  setTodosToLocalStorage(todos);
  todosContainer.prepend(createTodoElement(todo));
};

export const initTodoHandlers = todos => {
  formElement.addEventListener("submit", event => {
    event.preventDefault();
    const text = inputElement.value.trim();
    if (!text) return;
    handleCreateTodo(todos, text);
    inputElement.value = "";
  });

  todosContainer.addEventListener("click", ({ target }) => {
    const todo = target.closest(".todo");
    if (!todo) return;
    const id = Number(todo.dataset.id);
    if (target.matches(".button-complete")) {
      completeTodoById(todos, id);
      setTodosToLocalStorage(todos);
      todo.classList.toggle("completed");
    }
    if (target.matches(".button-delete")) {
      deleteTodoById(todos, id);
      setTodosToLocalStorage(todos);
      todo.remove();
    }
  });
};
