// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.


// function findSmallestNumber(numbers) {
//     if (!Array.isArray(numbers)) {
//         return 'Sorry, it is not an array!';
//     }

//     if (numbers.length === 0) {
//         return 'Array is empty!';
//     }
//     let min = numbers[0];

//     for (const num of numbers) {
//         if (num < min) {
//             min = num;
//         }
//     }
//     return min;
// }
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// console.log(findSmallestNumber(numbers));

// ?=================================================

// Напішить функцію min(a, b), яка повертає менше число з а і b.

// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(min(155, 75));

// ?=================================================

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function calculateAverage() {
//   if (arguments.length === 0) {
//     return 'Не передано аргументів!';
//   }

//   let sum = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     if (typeof arguments[i] !== 'number') {
//       return 'Усі аргументи повинні бути числами!';
//     }
//     sum += arguments[i];
//   }

//   return sum / arguments.length;
// }

// console.log(calculateAverage(1, 2, 3, 4, 5));

// ?===============================================

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// function sumAdjacentNumbers(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         result.push(arr[i] + arr[i + 1]);
//     }
//     return result;
// }

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// console.log(sumAdjacentNumbers(someArr));

// ?====================================================

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const array = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']
// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`${i + 1} - ${array[i]}`);
//     }
// }
// logItems(array);

// ?=========================================================

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
// };
// let sum = 0;
// for (const salary of Object.values(salaries)) {
//     sum += salary;
// }
// console.log(sum);

// ?====================================================

