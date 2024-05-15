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
