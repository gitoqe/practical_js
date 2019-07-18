//1. Создайте переменную year которой присвойте год своего рождения. Используя команды показанные в уроке вывести на страницу ваш возраст. Для этого выведите результат между текущим годом (укажите как число) и переменной year.
let year = 1994;
let yearNow = 2019;
let age = 0;
let pAge = document.getElementById('bYear');

age = yearNow-year;

console.log(yearNow-year);
pAge.innerHTML = age;
//2. Создайте alert, который выводит ваше имя.
alert('Максим');
//3. Выведите в консоли следующий код. Выполните анализ кода. Сложение строк называется конкатенация.
let a = 'Hello';
let b = ' ';
let c = 'world';
console.log(a+b+c); //Hello world
console.log(c+a+b); //worldHello 