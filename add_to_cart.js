//Действия с товаром
//1)  Изучить события кнопок
//2)  По  клику на  кнопку  добавить  в корзину товар со след параметрами
//  1)Картинка
//  2)Заголовок
//  3)Доп параметры
//  4)цена
//3)добавить  в корзину

//Конкретные  задачи:
//1)  Получить  картинку
//2)  Получить  заголовок
//      решение:  let ttl = document.getElementsByClassName("ttl");
//                     ttl[1].innerText
//3)  Получить  доп параметры
//4)  Получить  цену

//  Принцип получение данных  следующий:
//  Получить  данные  можно с помощью:
//.class
//#id
//attribute
//tag

//.class  - document.getElementsByClassName - внутри  документа получить  элементы  по  названию  класса
//  документ
//  (.) связка
//  get - получить
//  elements  - элементы  (потому что классов бывает  несколько )
//  byclassname - название  класса

//let ttl = document.getElementsByClassName("ttl");
//console.log(ttl[1].innerText);
//  Результат Ничего  не  вывелось

//Без команды вывода  ничего  не  выведется!

//Вариант вывода 1

//let ttl = document.querySelectorAll(".body_product>.ttl");

//console.log(ttl);
//console.log(ttl[0].innerText);
//console.log(ttl[1].innerText);
//console.log(ttl[2].innerText);
//console.log(ttl[3].innerText);
//console.log(ttl[4].innerText);
//for (let text of ttl) {
// console.log(text.innerText);
//}

var elements = document.getElementsByClassName("add_cart");

var myFunction = function () {
  var attribute =
    this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
  alert(attribute[0].innerText);
};

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", myFunction, false);
}

//function test_fun(parm, parm2, parm3) {
// var number = 10;
//var res;
//res = number + parm + parm2 + parm3;
//alert(res);
//}
//test_fun(20, 3, 1);

const arr = {
  name: "Ilya",
  age: 29,
  param: {
    color: "white",
    nat: "dungan",
  },
};
//console.log(arr.name);
//delete arr.name;
//console.log(arr);
for (let key in arr) {
  if (typeof arr[key] === "object") {
    for (let key2 in arr[key]) {
      console.log(arr[key][key2]);
    }
  } else {
    console.log(arr[key]);
  }
}

// что такое function

function name_fun(num) {
  let per_const = 120;
  let result;
  result = per_const + num;

  console.log(result);
}
name_fun(300);

//Методы и свойства
let text = "Привет!  как у тебя  дела?";
console.log(text.replace("тебя", "меня"));

//  Методы  и свойство чисел
let number = 120;
number.toString();

let x = 9;
let a = "10";
let result;
x = x + a;
console.log(x);
// Добавление товара в корзину

let class_name = document.getElementsByClassName("add_cart");

let myFunction = function () {
  alert("product");
};
for (var i = 0; i < class_name.length; i++) {
  class_name[i].addEventListener("click", myFunction, false);
  //addEventListener  - команда добавления  события
  //  ("click", myFunction, false)  - указываем тиа события
  //  тип события
  //  что должно  выполняться
  //  обработчик
}
