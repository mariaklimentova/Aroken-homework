"use strict";

// {
//    id: 1,
//    text: "todo",
//    is_comleted: false
// }
const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = (todoId) => `Todo with id ${todoId} not found`;


const getNewId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;
// (todo.id > maxId ? todo.id : maxId), 0) +1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);
  if (!todo) {  // todo === undefined
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todo.is_completed = !todo[todoKeys.is_completed];
  return todo;
};
// способ №1

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos
};

// способ №2

// const deleteTodoById = (todos, todoId) => {
//     return todos.filter(todo => todo[todoKeys.id] !== todoId);
// }

createTodo(todos, "123");
createTodo(todos, "123334");
completeTodoById(todos, 1);
createTodo(todos, "delete")
deleteTodoById(todos, 3)
console.log(todos);
