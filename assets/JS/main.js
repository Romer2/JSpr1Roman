'use strict';

let name = prompt("Введите имя");
let sername = prompt("Введите Фамилию");
let forname = prompt("Введите Отчество");

let isTrue = confirm("Это ваши данные?");

isTrue = (`${name}, ${sername}, ${forname}`);

alert(isTrue);

