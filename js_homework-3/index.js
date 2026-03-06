// Задача 1.
// Напишите цикл, который выводит числа от 1 до 20, но пропускает те числа, которые делятся на 4 без остатка.

// for (i = 1; i <= 20; i++) {
//     if (i % 4 == 0){
//         continue
//     }
//     console.log(i);
// }

// Задача 2.
// С помощью цикла for вычислите факториал числа (произведение всех чисел от 1 до заданного числа).
// Используйте prompt для получение начального значения.

// const userNumb = Number(prompt("Введите целое число"));
// let factorial 

// if (isNaN(userNumb)) {
//     alert("Вы ввели не корректное число");
//   } else {
//     factorial = 1;
//   }

// for (i = 1; i <= userNumb; i++) {  
//   factorial *= i;
// }

// console.log(factorial);

// *Задача 3.
// Выведите в консоль шахматную доску размером 8x8, где символы чередуются (например, # и пробел).
// Начинайте с # в первой ячейке первой строки.

let black = "[#]";
let white = "[ ]";
let line =""

for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 4; j++) {
        if (i % 2 != 0) {
            line += white;
            line += black;
        } else {
            line += black;
            line += white;
        }
    }
    line += "\n";
}

console.log(line);