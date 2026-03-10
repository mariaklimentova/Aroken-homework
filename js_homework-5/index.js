// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
  personName: "Mariya",
  personAge: 33,
  gender: "women",
};

console.log(person.personName, person.gender, person.personAge);

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

const nameList = {};
console.log(nameList);

const isEmpty = obj => {
  for (let key in obj) return false;
  return true;
};
console.log(isEmpty(nameList));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

let task = {
  title:"TEXT",
  description:"text",
  isCompleted: false,
};

function cloneAndModify (object, modifications) {
  return {...object, ...modifications}
}

let newTask = cloneAndModify(task,{Number: 40,})
console.log(newTask);

for (key in newTask) {
  console.log(`${key}`, newTask[key]);
  
}


// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:

function callAllMethods (object) {
  for (key in object) {
    if (typeof object[key] == "function") {
      object[key]()
    }
  }
}

const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};

console.log(callAllMethods(myObject));

