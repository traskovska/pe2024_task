function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

const users = [];

for (let i = 0; i < 10; i++) {
  const user = new User(
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() < 0.5,
    `useremail${i}@gmail.com`,
    Math.random() < 0.5
  );
  users.push(user);
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Отримати масив користувачів, які не підписані (not subscribed).

const notSubscribedUsers = users.filter((user) => !user.isSubscribed);
console.log(notSubscribedUsers);

// Вивести список повних імен користувачів.

users.forEach((user) => {
  console.log(user.getFullName());
});

// Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).

const schoolAgeGirls = users
  .filter((user) => !user.isMale && user.age >= 6 && user.age <= 18)
  .map((user) => user.getFullName());
console.log(schoolAgeGirls);

// Видалити з масиву користувача з email  useremail5@gmail.com.

const deletedEmail = users.filter(
  (user) => user.email !== "useremail5@gmail.com."
);
console.table(deletedEmail);

// Змінити email користувачу з id 2 (можна спробувати використати find).

const emailToUpdate = users.find((user) => user.id === 2);
if (emailToUpdate) {
  emailToUpdate.email = "changedemail1@example.com";
}

console.log(users);

const subscribedUsers = users.filter((user) => user.isSubscribed);

const percentAgeSubscribed = (subscribedUsers.length / users.length) * 100;
console.log("Відсоток підписаних користувачів:", percentAgeSubscribed, "%");
