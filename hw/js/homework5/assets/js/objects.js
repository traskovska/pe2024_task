// 1
const customer = {
  firstName: "Kate",
  lastName: "Olho",
  email: "fjefefnej@gmail.com",
  password: 1234,
  phone: "+38067245958",
  address: {
    city: "Kyev",
    street: "Stalevarov",
    haus: 12,
    apartment: 193,
  },

  getAddress() {
    return this.address;
  },

  changePhone(newPhone) {
    this.phone = newPhone;
    customer.changePhone("+38098677657");
  },
};
console.log(customer.address);
console.log(customer.phone);

delete customer.address;

const customerCopy1 = Object.assign({}, customer);
const customerCopy2 = { ...customer };

console.log(customerCopy1);
console.log(customerCopy2);

// 2

const cat = {
  name: "Murka",
  color: "black",
  isMale: false,
  isFurnitureDemage: true,
};
for (const key in cat) {
  console.log(`${key}: ${cat[key]}`);
}

// 3

const book = function (author, title, year, publisher, price) {
  this.author = author;
  this.title = title;
  this.year = year;
  this.publisher = publisher;
  this.price = price;
};

book.prototype.getBookAge = function () {
  return new Date().getFullYear() - this.year;
};

book.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

const book1 = new book("Anna Karenina", "Lev Tolstoy", 1878, "Moskow", 300);
console.log(book1);

console.log(`Book age: ${book1.getBookAge()} years`);

book1.changePrice(150);
console.log(`New price is ${book1.price}`);
