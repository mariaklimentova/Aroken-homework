export const getTodosFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todos"));
}

export const setTodosToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos))
}