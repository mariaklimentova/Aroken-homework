// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку.
// Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

// const calculateFinalPrice = (prise, discount, tax) => prise * (1 - discount / 100) * (1 + tax);

// console.log(calculateFinalPrice(100, 10, 0.2))
// console.log(calculateFinalPrice(100, 10, 0))

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль.
// Если имя пользователя равно "admin" и пароль равен "123456",
// функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

// const userRole = prompt("Введите ваш статус (user, admin)");
// const password = prompt("Введите пароль (123456)");

// const checkAccess = (role, pas) =>
//   role === "admin" && pas === "123456" ? "Доступ разрешен" : "Доступ запрещен";
// // {
// //     if (role === "admin" && pas === "123456") {
// //         return "Доступ разрешен"
// //     } else {
// //         return "Доступ запрещен"
// //     }
// // }

// console.log(checkAccess(userRole, password));

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

// const time = Number(prompt("Сколько сейчас часов (от 0 до 23)"));
// console.log(time);

// function getTimeOfDay(numb) {
//   if (numb >= 0 && numb <= 5) {
//     return "Ночь";
//   } else if (numb >= 6 && numb <= 11) {
//     return "Утро";
//   } else if (numb >= 12 && numb <= 17) {
//     return "День";
//   } else if (numb >= 18 && numb <= 23) {
//     return "Вечер";
//   } else {
//     return `${numb} "Некорректное время"`;
//   }
// }

// console.log(getTimeOfDay(time));

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

const firstNumber = +prompt("Ведите начальное число, числового диапазона");
const secondNumber = +prompt("Ведите конечное число, числового диапазона");

function findFirstEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      //   const numb = i;
      return `первое четное число ${i}`;
    }
  }
  return "Чётных чисел нет";
}

console.log(findFirstEven(firstNumber, secondNumber));

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"
