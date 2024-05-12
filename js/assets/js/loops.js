// console.log("Пройти прямо");
// console.log("Повернути на 90 град наліво");
// console.log("Пройти прямо");
// // console.log("Повернути на 90 град наліво");
// // console.log("Пройти прямо");
// // console.log("Повернути на 90 град наліво");

// let currentStep = 1;
// const STEPS_COUNT = 4;
// while (currentStep <= STEPS_COUNT) {
//   console.log("Пройти прямо");
//   console.log("Повернути на 90 град наліво");
//   currentStep++;
// }

// Вивести номера стр с 10 до 20

// let pageCounts = 10;
// const PAGE = 20;
// while (pageCounts <= PAGE) {
//   console.log(pageCounts++);
// }

// // Ввести початкову та кінцеву сторінку і вивести парні сторінки

// let currentPage = Number(prompt("Input start page"));
// const endPage = Number(prompt("Input end page"));
// while (currentPage <= endPage) {
//   if (currentPage % 2 === 0) {
//     console.log(currentPage);
//   }
//   currentPage += 1;
// }

// // ввести число i , если оно правильное вивести числе в квадрате
// ВВести число
// проверить безконечное ли оно
// если нескончаемое , то ввести заново
// если кончаемое то привести к квадрату

// let inputNumber = Number(prompt("Input number"));

// while (!Number.isFinite(inputNumber)) {
//   inputNumber = Number(prompt("Input number"));
// }
// console.log(`${inputNumber} ** 2 = ${inputNumber ** 2}`);

// do..while

// let inputNumber = null;

// do {
//   inputNumber = Number(prompt("Input number"));
// } while (!Number.isFinite(inputNumber));
// console.log(`${inputNumber} ** 2 = ${inputNumber ** 2}`);

// ВВести числа с 50 до 40

// let i = 50;
// do {
//   console.log(i);
//   i--;
// } while (i >= 40);

// Користувач має 3 спроби ввести пароль
// Якщо пароль вірний, то вивести "Пароль вірний"
// Інакше "Пароль невірний"

// let startNumber = 101;
// endNumber = 91;
// for (; startNumber >= endNumber; startNumber--) {
//   console.log(startNumber);
// }
