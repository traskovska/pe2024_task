let a = 4;
let b = 5;
console.log(a * b);

let c = 3;
let d = 2;
console.log(c / d);

let e = 6;
let f = 20;
console.log(e + f);

let numberVariable = 11;
let booleanVariable = true;
let stringVariable = "java script";
let stringnumberVariable = "100";
console.log(numberVariable);
console.log(booleanVariable);
console.log(stringVariable);
console.log(stringnumberVariable);

let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num++;
num--;
alert(num);
console.log(num);

const number = prompt("Введіть число");
const squaredNumber = Math.pow(number, 2);
alert(squaredNumber);

const number1 = Number(prompt("Введіть перше число"));
const number2 = Number(prompt("Введіть друге число"));
const average = (number1 + number2) / 2;
alert("Середнє арифметичне двох чисел: " + average);

const minutes = prompt("Введіть кількість хвилин");
const seconds = minutes * 60;
alert("Кількість секунд: " + seconds);

const greeting = "Hello, ";
const userName = prompt("Введіть ваше ім'я");
document.write("<p>" + greeting + " " + userName + "!" + "<p>");
