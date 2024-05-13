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
