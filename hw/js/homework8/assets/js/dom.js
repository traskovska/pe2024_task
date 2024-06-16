// 1) HTML: є кнопка.
//     JS: При натисканні на кнопку змінити текст цієї кнопки.

const btn1 = document.getElementById("test1");

btn1.onclick = (e) => {
  btn1.textContent = "New Text";
};

// 2) HTML: є кнопка.
//     JS: При натисканні на кнопку змінити її колір.

const btn2 = document.getElementById("test2");

function eventHandler(event) {
  btn2.style.color = "green";
}

btn2.onclick = eventHandler;

// 3) HTML: є зображення.
//     JS: Зробити так, щоб при появі сторінки відображалася одна картинка, а при наведенні миші на неї відображалася інша.

const image = document.getElementById("jsImg");

image.onmouseenter = (e) => {
  image.src =
    "https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-on-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept_335657-2412.jpg?size=626&ext=jpg&ga=GA1.1.987269458.1713726029&semt=ais_user";
};

// Реалізувати обробку наступних подій:
// при натисканні на кнопку "Завантажити" додати інфо про користувача в <article></article>
// при натисканні на сердечко перефарбувати його в червоний колір.
// при наведенні на дату народження показувати кількість повних років.
// * стилізувати картку

const user = {
  firstName: "Test",
  lastName: "Testovych",
  profilePhoto:
    "https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg",
  birthday: new Date("2000-05-16"),
  nickname: "super dev",
  likesCount: 10,
};

const userInfo = document.getElementById("loadUserButton");

userInfo.onclick = (e) => {
  console.log("Test");
  const userInfo = document.getElementById("userInfo");

  const fullName = document.createElement("p");
  fullName.textContent = `Ім'я: ${user.firstName} ${user.lastName}`;
  userInfo.append(fullName);

  const profilePhoto = document.createElement("img");
  profilePhoto.src = user.profilePhoto;
  profilePhoto.alt = `${user.firstName} ${user.lastName}`;
  profilePhoto.style.width = "300px";
  userInfo.append(profilePhoto);

  const birthday = document.createElement("p");
  birthday.id = "birthday";
  birthday.textContent = `День народження: ${user.birthday.toLocaleDateString()}`;
  userInfo.append(birthday);

  const nickname = document.createElement("p");
  nickname.textContent = `Нікнейм: ${user.nickname}`;
  userInfo.append(nickname);

  const likesCount = document.createElement("p");
  likesCount.innerHTML = `Кількість вподобань: <i id="heartIcon" class="fa fa-heart" aria-hidden="true"></i>  ${user.likesCount} `;
  userInfo.append(likesCount);

  const heartIcon = document.getElementById("heartIcon");
  heartIcon.onclick = (e) => {
    heartIcon.style.color = heartIcon.style.color === "red" ? "" : "red";
  };

  const dateBirthday = document.querySelector("#birthday");
  dateBirthday.onmouseenter = (e) => {
    const userAge = new Date().getFullYear() - user.birthday.getFullYear();
    dateBirthday.textContent = `Вік користувача: ${userAge} `;
  };
};
