// Задание 1.
// Дан массив пользователей:
const users = [
  {
    name: "Alex",
    age: 24,
    isAdmin: false,
  },
  {
    name: "Bob",
    age: 13,
    isAdmin: false,
  },
  {
    name: "John",
    age: 31,
    isAdmin: true,
  },
  {
    name: "Jane",
    age: 20,
    isAdmin: false,
  },
];
// Добавьте в конец массива двух пользователей:

users.push(
  {
    name: "Ann",
    age: 19,
    isAdmin: false,
  },
  {
    name: "Jack",
    age: 43,
    isAdmin: true,
  },
);
console.log(users);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users),
// которая возвращает средний возраст пользователей.

let averageAge = 0;
users.forEach(array => {
  averageAge += array.age;
});
averageAge = averageAge / users.length;
console.log(`средний возраст пользователей: ${averageAge} лет`);

// Задание 3.
// Используя массив пользователей users из предыдущего задания,
// напишите функцию getAllAdmins(users),
// которая возвращает массив всех администраторов.

function getAllAdmins(users) {
  const admins = [];
  users.forEach(user => {
    if (user.isAdmin === true) {
      admins.push(user);
    }
  });
  return admins;
}
console.log(getAllAdmins(users));

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n
// элементов массива. Если n == 0, возвращается пустой массив [],
// если n == undefined, то возвращается массив с первым элементом.

function first(arr, n) {
  const newArr = [];
  if (n > arr.length) {
    console.error("ERROR");
    return;
  } else if (n === 0) {
    console.log(newArr);
    return;
  } else if (n === undefined) {
    return [arr[0]];
  } else {
    arr.forEach(function (value, index) {
      if (n < index-1) {
        newArr.push(value);
      }
    });
  }
  console.log(newArr);
  return;
}

first(users, 2);
