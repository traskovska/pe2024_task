let startNumber = 25;
const endNumber = 0;

while (startNumber >= endNumber) {
  console.log(startNumber);
  startNumber--;
}

let number = 25;

do {
  console.log(number);
  number--;
} while (number >= 0);

for (let i = 25; i >= 0; i--) {
  console.log(i);
}

let a = 10;
const b = 50;

while (a <= b) {
  if (a % 5 === 0) {
    console.log(a);
  }
  a++;
}

let c = 10;
const d = 50;
do {
  if (c % 5 === 0) {
    console.log(c);
  }
  c++;
} while (c <= d);

for (e = 10; e <= 50; e++) {
  if (e % 5 === 0) {
    console.log(e);
  }
}

let f = 1;
let j = 100;
let sum = 0;
while (f <= j) {
  sum += f;
  f++;
}
console.log(sum);
let k = 1;
let l = 100;
let sum2 = 0;

do {
  console.log(sum);
  sum2 += k;
  k++;
} while (k <= l);

let sum3 = 0;
for (let m = 1; m <= 100; m++) {
  sum3 += m;
}
console.log(sum3);
