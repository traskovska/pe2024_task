const isDay = true;
let color;
let backgroundColor;
let timesOFday = null;
if (isDay) {
  color = "black";
  backgroundColor = "white";
  timesOFday = "Світла тема";
} else {
  color = "white";
  backgroundColor = "black";
  timesOFday = "Темна тема";
}

document.write(
  `<p style="color:${color};background-color:${backgroundColor};">${timesOFday}</p>`
);

const isOnline = false;

if (!isOnline) {
  document.write(
    "Ваше повідомлення буде відправлено при під'єднанні до мережі Інтернет"
  );
}

let discount = 0;

const purchaseAmount = +prompt("Введіть суму покупки");

if (purchaseAmount > 500 && purchaseAmount <= 800) {
  discount = 0.03;
} else if (purchaseAmount > 800) {
  discount = 0.05;
} else {
  discount = 1;
}

let endSum = purchaseAmount * discount;

alert(endSum);

// switch-конструкція

let daysWeek = prompt("Введіть номер тижня");

switch (daysWeek) {
  case "1":
    alert("Понеділок");
    break;
  case "2":
    alert("Вівторок");
    break;
  case "3":
    alert("Середа");
    break;
  case "4":
    alert("Четверг");
    break;
  case "5":
    alert("Пятниця");
    break;
  case "6":
    alert("Субота");
    break;
  case "7":
    alert("Неділя");
    break;
  default:
    alert("Дня з таким номером не існує");
}

const day = +prompt("Введіть число від 1 до 31");

switch (true) {
  case day >= 1 && day <= 10:
    alert("Перша декада");
    break;
  case day >= 11 && day <= 20:
    alert("Друга декада");
    break;
  case day >= 21 && day <= 31:
    alert("Третя декада");
    break;
  default:
    alert("Такого дня не має");
}
