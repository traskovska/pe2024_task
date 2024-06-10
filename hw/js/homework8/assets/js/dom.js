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

image.onmouseover = (e) => {
  image.src =
    "https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-on-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept_335657-2412.jpg?size=626&ext=jpg&ga=GA1.1.987269458.1713726029&semt=ais_user";
};
