// 1. Создайте блок с id="modal". Добавьте две кнопки с разными id. На кнопки добавьте функции, одна из которых скрывает блок modal, вторая отображает.
let btn_Hide = document.querySelector('#btn-hide');
let btn_Show = document.querySelector('#btn-show');
let block = document.querySelector('.modal');
function on() {
    block.style.display = 'block';
}
function off() {
    block.style.display = 'none';
}
btn_Hide.onclick = off;
btn_Show.onclick = on;
//2. Напишите функцию, которая складывает два числа. Числа прописаны внутри функции. Функция выполняется при нажатии на кнопку.
let btn_Sum = document.querySelector('#btn-sum');
function sumOfTwo(){
    console.log(5+23);
}
btn_Sum.onclick = sumOfTwo;
//3. Создайте кнопку, добавьте функцию при нажатии на кнопку. Функция должна выводить alert с приветствием.
let btn_Alert = document.querySelector('#btn-alert');
function showAlert(){
    alert('Hello');
}
btn_Alert.onclick = showAlert;
//4. Создайте кнопку которая при нажатии запускает две произвольные функции.
let btn_DveFunc = document.querySelector('#btn-dve-func');
function f1(){
    console.log(7+7);
}
function f2(){
    alert('В консоль выведено число 14');
}
function Dve(){ //технически это три функции, но всё же
    f1();
    f2();
}
btn_DveFunc.onclick = Dve;
//5. Создайте кнопку, нажатие на которую скрывает сама себя.
let btn_Vanish = document.querySelector('#btn-vanish');
function Vanish(){
    btn_Vanish.hidden = true;
}
btn_Vanish.onclick = Vanish;
//6. Создайте кнопку, которая при нажатии выводит вместо текста на себе - предупреждение "не нажимать".
let btn_No = document.querySelector('#btn-no');
function No(){
    btn_No.innerText = 'не нажимать';
}
btn_No.onclick = No;