function isWorkingAgePerson(age) {
  return age >= 16 && age <= 64;
}
console.log(isWorkingAgePerson(20));
console.log(isWorkingAgePerson(4));
console.log(isWorkingAgePerson(88));

const WorkingAgePerson = function (age) {
  return age >= 16 && age <= 64;
};
console.log(WorkingAgePerson(20));
console.log(WorkingAgePerson(4));
console.log(WorkingAgePerson(88));

function checkMultiplicity(a, b) {
  return a % b === 0;
}

console.log(checkMultiplicity(25, 5));
console.log(checkMultiplicity(15, 3));
console.log(checkMultiplicity(15, 5));
console.log(checkMultiplicity(15, 4));

const checkMultiplicity1 = function (a, b) {
  return a % b === 0;
};

console.log(checkMultiplicity1(25, 5));
console.log(checkMultiplicity1(15, 3));
console.log(checkMultiplicity1(15, 5));
console.log(checkMultiplicity1(15, 4));

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

console.log(isTriangle(1, 1, 1));
console.log(isTriangle(2, 4, 6));
console.log(isTriangle(5, 5, 8));
console.log(isTriangle(1, 0, 8));

function calcTriangleArea(a, b, c) {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}

console.log(calcTriangleArea(3, 5, 5));
console.log(calcTriangleArea(4, 6, 7));

/**
 *
 * @param {number} number - The number to check.
 * @returns {boolean} True if the number is prime, false otherwise.
 */

function acceptNumber(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number !== 1;
}
console.log(acceptNumber(8));

/**
 * @function productCard
 * @param {string} [imageUrl="https://cdn-icons-png.flaticon.com/512/1170/1170679.png"] - The URL of the product image.
 * @param {string} name - The name of the product.
 * @param {string} description - description of the product.
 * @param {number} price - The price of the product.
 * @param {number} discountPrice - The discounted price of the product.
 * @returns {string} The HTML string for the product card.
 */

function productCard(
  imageUrl = "https://cdn-icons-png.flaticon.com/512/1170/1170679.png",
  name,
  description,
  price,
  discountPrice
) {
  let discountPriceShow = "";
  if (discountPrice !== undefined) {
    const discount = Math.round(((price - discountPrice) / price) * 100);
    discountPriceShow = `<p>${discountPrice} (-${discount}%)</p>`;
  }

  return `
    <article>
      <img src="${imageUrl}" alt="${name}"
      <section>
        <h2>${name}</h2>
        <p>${description}</p>
        <p style="text-decoration:${
          discountPrice ? "line-through" : ""
        }">${price}</p>
        ${discountPriceShow}
      </section>
    </article>
  `;
}

document.write(
  productCard(
    "https://cdn-icons-png.flaticon.com/512/1170/1170679.png",
    "Laptop",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, placeat ex laudantium facere omnis dolorem",
    1500,
    1200
  )
);
