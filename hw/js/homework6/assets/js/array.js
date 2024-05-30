const numbers = [2, 5, 7, 12, 8, 15];

// 1
numbers.pop();
numbers.shift();
console.log(numbers);
numbers.unshift(10);
numbers.push(88);
console.log(numbers);

// 2
console.log(numbers.length);

// 3
const copyNumbers = [...numbers];
console.log(copyNumbers);

// 4

for (let i = 0; i < numbers.length; i += 2) {
  console.log(numbers[i]);
}

// 5

let mult = 1;
for (let i = 0; i < numbers.length; i++) {
  mult *= numbers[i];
}
console.log(mult);

// 6
const phones = [
  {
    id: 1,
    brand: "Apple",
    model: "iPhone 13",
    color: "black",
    price: 999,
    RAM: "4GB",
  },
  {
    id: 2,
    brand: "Samsung",
    model: "Galaxy S21",
    color: "white",
    price: 799,
    RAM: "8GB",
  },
  {
    id: 3,
    brand: "Google",
    model: "Pixel 6",
    color: "black",
    price: 599,
    RAM: "8GB",
  },
  {
    id: 4,
    brand: "OnePlus",
    model: "9 Pro",
    color: "green",
    price: 969,
    RAM: "12GB",
  },
  {
    id: 5,
    brand: "Huawei",
    model: "Model C",
    color: "blue",
    price: 1317,
    RAM: "8GB",
  },
  {
    id: 6,
    brand: "Apple",
    model: "Model F",
    color: "red",
    price: 646,
    RAM: "6GB",
  },
  {
    id: 7,
    brand: "Google",
    model: "Model B",
    color: "green",
    price: 1202,
    RAM: "12GB",
  },
  {
    id: 8,
    brand: "OnePlus",
    model: "Model E",
    color: "yellow",
    price: 1430,
    RAM: "8GB",
  },
  {
    id: 9,
    brand: "Huawei",
    model: "Model E",
    color: "white",
    price: 1336,
    RAM: "12GB",
  },
  {
    id: 10,
    brand: "Samsung",
    model: "Model A",
    color: "red",
    price: 812,
    RAM: "4GB",
  },
  {
    id: 11,
    brand: "Xiaomi",
    model: "Model C",
    color: "blue",
    price: 928,
    RAM: "6GB",
  },
  {
    id: 12,
    brand: "Google",
    model: "Model B",
    color: "red",
    price: 621,
    RAM: "6GB",
  },
  {
    id: 13,
    brand: "Samsung",
    model: "Model B",
    color: "yellow",
    price: 1357,
    RAM: "8GB",
  },
  {
    id: 14,
    brand: "Apple",
    model: "Model E",
    color: "black",
    price: 1372,
    RAM: "6GB",
  },
  {
    id: 15,
    brand: "OnePlus",
    model: "Model F",
    color: "blue",
    price: 1274,
    RAM: "4GB",
  },
  {
    id: 16,
    brand: "Huawei",
    model: "Model D",
    color: "red",
    price: 1141,
    RAM: "12GB",
  },
  {
    id: 17,
    brand: "Samsung",
    model: "Model B",
    color: "green",
    price: 1434,
    RAM: "4GB",
  },
  {
    id: 18,
    brand: "Xiaomi",
    model: "Model D",
    color: "yellow",
    price: 1468,
    RAM: "8GB",
  },
  {
    id: 19,
    brand: "Google",
    model: "Model E",
    color: "black",
    price: 1405,
    RAM: "8GB",
  },
  {
    id: 20,
    brand: "Huawei",
    model: "Model D",
    color: "white",
    price: 1100,
    RAM: "4GB",
  },
  {
    id: 21,
    brand: "Apple",
    model: "Model B",
    color: "red",
    price: 1350,
    RAM: "4GB",
  },
  {
    id: 22,
    brand: "Samsung",
    model: "Model F",
    color: "blue",
    price: 750,
    RAM: "8GB",
  },
  {
    id: 23,
    brand: "Google",
    model: "Model A",
    color: "yellow",
    price: 1050,
    RAM: "12GB",
  },
  {
    id: 24,
    brand: "OnePlus",
    model: "Model C",
    color: "black",
    price: 1450,
    RAM: "6GB",
  },
  {
    id: 25,
    brand: "Huawei",
    model: "Model B",
    color: "green",
    price: 900,
    RAM: "4GB",
  },
  {
    id: 26,
    brand: "Xiaomi",
    model: "Model E",
    color: "white",
    price: 1300,
    RAM: "12GB",
  },
  {
    id: 27,
    brand: "Apple",
    model: "Model D",
    color: "red",
    price: 1150,
    RAM: "8GB",
  },
  {
    id: 28,
    brand: "Samsung",
    model: "Model C",
    color: "blue",
    price: 1250,
    RAM: "6GB",
  },
  {
    id: 29,
    brand: "Google",
    model: "Model F",
    color: "yellow",
    price: 800,
    RAM: "8GB",
  },
  {
    id: 30,
    brand: "OnePlus",
    model: "Model A",
    color: "black",
    price: 1400,
    RAM: "6GB",
  },
];

function viewPhoneCard(phone) {
  console.log(phone);
  return `
<article>
<header>
<h2> ${phone.brand}${phone.model}</h2>
</header>
<section>
<p>Color: ${phone.color}</p>
<p>Price: ${phone.price}</p>
<p>RAM: ${phone.RAM}</p>
</section>
</article>
  `;
}

for (let phone of phones) {
  document.write(viewPhoneCard(phone));
}

let sum = 0;
for (let i = 0; i < phones.length; i++) {
  sum += phones[i].price;
}

const averagePrice = sum / phones.length;
console.log(averagePrice);

const phones1 = [];

const ramCounts = {
  "4GB": 0,
  "6GB": 0,
  "8GB": 0,
  "12GB": 0,
};

for (const phone of phones) {
  ramCounts[phone.RAM]++;
}
console.log(ramCounts);

// 8

const arrayOriginal = [-1, 5, 0, 9, -10];

const noZeroArray = arrayOriginal.filter((num) => num !== 0);
console.log(noZeroArray);

// 9

const arrayOriginal1 = [99, 5, 0, 9, 30];

const allAray = arrayOriginal1.map((el) => el / 100);
console.log(allAray);

// 10
function toCub(el) {
  console.log(el ** 3);
}
arrayOriginal1.forEach(toCub);

// 11
function findInd(el) {
  return el ** 2 === 100;
}
const numIndex = arrayOriginal1.findIndex(findInd);
console.log(numIndex);

if (numIndex == -1) {
  console.log("Такого елементу не існує");
} else {
  arrayOriginal1.splice(numIndex, 1);
}
console.log(arrayOriginal1);

// 12

const allEven = arrayOriginal1.every((el) => el % 2 === 0);
console.log(allEven);

// 13
const min = arrayOriginal1.some((el) => el < 0);
console.log(min);
