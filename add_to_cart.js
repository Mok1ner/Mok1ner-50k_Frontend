// 2) По клику на кнопку добавить в корзину товар с след параметрами:
//         1) Картинка
//         2) Заголовок
//         3) Доп параметры цвет
//         4) Цена
//     3) Добавить в корзину

// Конкретные задачи:
// 1) Получить картинку
// 2) Получить заголовок
// Решение:
//     let ttl = document.getElementsByClassName("ttl");
//     ttl[1].innerText

// 3) Получить доп параметры
// 4) Получить цену

// Прицип получения данных следующий:
// Получить данные можно с помощью:
// .class
// #id
// attribute
// tag

// .class - document.getElementsByClassName  - Внутри документа получить элементы по названию класса
//          вкладка
//          (.) связка
//          get  - получить
//          Elements  - Элементы (потому что классов бывает несколько)
//          By  - по / от
//          ByClassName  - название класса

// let ttl = document.getElementsByClassName("ttl");
// ttl[1].innerText

//Результат: ничего не вывелось

// Без команды вывод ничего не выведется!

// let ttl = document.getElementsByClassName("ttl");
// console.log(ttl[0].innerText);
// console.log(ttl[1].innerText);
// console.log(ttl[2].innerText);
// console.log(ttl[3].innerText);
// console.log(ttl[4].innerText);
// console.log(ttl[5].innerText);
// console.log(ttl[6].innerText);
// console.log(ttl[7].innerText);
// let ttl = document.getElementById("ttl");

// var arr = ["Яблоко", "Апельсин", "Груша"];
// arr.forEach(function(item, i, arr) {
// 	alert( i + ": " + item + " (массив:" + arr + ")" );
// });

// var arr = [1, -1, 2, -2, 3, "asda"];

// var positiveArr = arr.filter(function(number) {
// 	return number > 1;
// });

// alert( positiveArr ); // 1,2,3

// var names = ['HTML', 'CSS', 'JavaScript'];

// var nameLengths = names.map(function(name) {
// 	return name.length;
// 	//length - длина текста
// });

// // получили массив с длинами
// alert( nameLengths ); // 4,3,10

// var arr = [1, -1, 2, -2, 3];

// function isPositive(number) {
// 	return number > 0;
// }

// alert( arr.every(isPositive) ); // false, не все положительные
// alert( arr.some(isPositive) ); // true, есть хоть одно положительное

// var arr = [1, 12, 23, 43, 5];

// // для каждого элемента массива запустить функцию,
// // промежуточный результат передавать первым аргументом далее
// var result = arr.reduce(function(sum, current) {
// 	return sum + current;
// }, 0);

// alert( result ); // 84

// let ttl = document.querySelectorAll(".body_product > .ttl");

// console.log(ttl);
// Вариант вывода номер 1
// console.log(ttl[0].innerText);
// console.log(ttl[1].innerText);
// console.log(ttl[2].innerText);
// console.log(ttl[3].innerText);
// console.log(ttl[4].innerText);

// for (let text of ttl) {
// 	console.log(text.innerText);
// }

// Что такое function

let num = 200;

function name_fun(num) {
  let per_const = 120;
  let result;

  result = per_const + num;
  // console.log(result);
}
name_fun(num);

// console.log(num);

// Методы и Свойства строк

let text = "          Привет! как у тебя дела?            ";
// console.log(text);
// console.log(text.trim());

// Методы и Свойства чисел
let number = 120;
number.toString();

let x = 9;
let a = "10";
let result;
result = x + +a;

// console.log(result);

// Добавление товара в корзину
let class_name = document.getElementsByClassName("add_cart");

let myFunction = function (evt) {
  evt.preventDefault();

  let title =
    this.parentNode.parentNode.parentNode.querySelectorAll(".item__title a");
  let price =
    this.parentNode.parentNode.parentNode.querySelectorAll(".price .oprice");
  let image =
    this.parentNode.parentNode.parentNode.querySelectorAll(".item__img img");

  let creat_li = document.createElement("li");
  creat_li.classList.add("bag__item");

  creat_li.innerHTML =
    '<div class="bag__img">\
										<a href="#">\
											<img src="' +
    image[0].src +
    '" alt="">\
										</a>\
									</div>\
									<div class="bag__info">\
										<p class="info__title"><a href="#">' +
    title[0].innerText +
    '</a></p>\
										<div class="info__price">\
											<span class="currency">$</span>\
                                			<span class="oprice">' +
    price[0].innerText +
    '</span>\
										</div>\
										<div class="trash">\
											<a href="#"><i class="far fa-trash-alt"></i></a>\
										</div>\
									</div>';

  let block_cart = document.querySelector(".bag.shopcard__dropdown ul");
  block_cart.appendChild(creat_li);

  alert("Товар успешно добавлен в корзину!");

  // Удаление товара
  delete_product();

  //получить общее количество суммы товаров в корзине
  total_price();

  //получить количество товаров в корзине
  count_product();
};

for (var i = 0; i < class_name.length; i++) {
  class_name[i].addEventListener("click", myFunction, false);
  // addEventListener - добовляем событие клика
  // ('click', myFunction, false);
  //  тип события
  //  Что должно выполнятся
  // Обработчик
}

function delete_product() {
  let click_trash = document.querySelectorAll(".trash");

  for (var i = 0; i < click_trash.length; i++) {
    click_trash[i].addEventListener("click", del_func, false);
  }

  function del_func(evt) {
    evt.preventDefault();
    this.parentNode.parentNode.remove();

    total_price();
    count_product();
  }
}

function total_price() {
  let count_price = document.querySelectorAll(".info__price .oprice");

  let total_price = 0;

  for (var i = 0; i < count_price.length; i++) {
    total_price = total_price + +count_price[i].textContent;
  }

  document.getElementsByClassName(
    "total_cart"
  )[0].innerHTML = `$ ${total_price}`;
  document.querySelectorAll(
    ".shopcard__total span"
  )[0].innerHTML = `$ ${total_price}`;
}

function count_product() {
  let count_ptoduct = document.getElementsByClassName("bag__item").length;
  document.getElementsByClassName("cart_count")[0].innerHTML = count_ptoduct;
}

const tabs = {
  list_tabs: ["Лидеры продаж", "Новинки", "Распродажа"],
};

let creat_ul = document.createElement("ul");

tabs.list_tabs.forEach((item, i) => {
  creat_ul.innerHTML += `<li>${item}</li>`;
});

document.querySelector(".insert_listing").innerHTML += creat_ul.outerHTML;
