/*1. Игра Угадай число
С помощью функции при загрузке страницы генерируйте случайное число от 0 до 9. Добавьте его в переменную.

Создайте input[type = text] и кнопку. На кнопку добавьте функцию, которая читает введенное пользователем число в элемент input. Проверьте введеное число: - не ввел ли пользователь пустую строку - ввел ли пользователь число

Сравните введенное и загаданное число. Если они совпали - выведите alert с поздравлением и перезагрузите страницу. Если не совпали - выведите alert с сообщением (больше или меньше введенное число загаданному).*/

// генерация числа для сравнения
let rand_Num;
rand_Num = Math.round(Math.random()*10);
console.log('Случайное число в задаче 1 = ' + rand_Num);
// получение числ из поля
function getNumber(){
    let guess_num = (document.querySelector('#guess-number')).value;
    guess_num = parseInt(guess_num);
    // проверка на корректность ввода
    if (!isNaN(guess_num)){
        compare(guess_num, rand_Num);
    }else{
        alert('Введите в поле число');
    }
    
}
// сравнение чисел
function compare(first, second){
    if (first === second){
        alert('Вы угадали');
        location.reload();
    }else{
        if (first > second){
            alert('Ваше число больше');
        }else{
            alert('Ваше число меньше');
        }
        
    }
}
document.querySelector('#btn-guess').onclick = getNumber;

// 2. Создайте кнопку. После первого нажатия кнопка дожна сменить текст на себе на "Не нажимать", и вывести на экран количество оставшихся попыток - 2. После 2 нажатий кнопки, она должна скрыть сама себя.
let btn_No = document.querySelector('#btn-no');
let count = 0;
function dontPush(){
    count = count + 1; //увеличение количества вызовов
    if (count == 1){
        btn_No.innerText = 'Не нажимать';
        document.querySelector('#task-2').innerText = 'Осталось '+ (3-count) +' попытки';
    }else if(count == 2){
        document.querySelector('#task-2').innerText = 'Осталось '+ (3-count) +' попытка';
    }else{
        document.querySelector('#task-2').innerText = 'Попыток больше нет';
        btn_No.hidden = true;
    }
}
btn_No.onclick = dontPush;

// 3. Создайте два поля для ввода чисел. После ввода и нажатия кнопки - выведите большее число.
function maxNum(){
    // получение чисел без проверки
    let X = (document.querySelector('#compane-number-one')).value;
    X = parseInt(X);
    let Y = (document.querySelector('#compane-number-two')).value;
    Y = parseInt(Y);
    //сравнение и вывод
    if (X > Y){
        document.querySelector('#otvet').innerText = X;
    }else if (X < Y){
        document.querySelector('#otvet').innerText = Y;
    }else{
        document.querySelector('#otvet').innerText = 'Числа равны';
    }
}
document.querySelector('#btn-compare').onclick = maxNum;

// 4. Создайте два поля. В одно пользователь вводит день рождения, во второй - месяц (в виде числа). Выведите знак зодиака под каким родился пользователь.
function zodiak(){
    // получение
    let D = (document.querySelector('#day')).value;
    D = parseInt(D);
    let M = (document.querySelector('#month')).value;
    M =parseInt(M);
    let znak = 'Введены некорректные данные';
    // проверка
    // https://ru.wikipedia.org/wiki/Знаки_зодиака
    if (((M == 3) && (D >= 21)) || ((M == 4) && D <= 19)){
        znak = 'Овен ♈';
    }else if (((M == 4) && (D >= 20)) || ((M == 5) && D <= 20)){
        znak = 'Телец ♉';
    }else if (((M == 5) && (D >= 21)) || ((M == 6) && D <= 20)){
        znak = 'Близнецы ♊';
    }else if (((M == 6) && (D >= 21)) || ((M == 7) && D <= 22)){
        znak = 'Рак ♋';
    }else if (((M == 7) && (D >= 23)) || ((M == 8) && D <= 22)){
        znak = 'Лев ♌';
    }else if (((M == 8) && (D >= 23)) || ((M == 9) && D <= 22)){
        znak = 'Дева ♍';
    }else if (((M == 9) && (D >= 23)) || ((M == 10) && D <= 22)){
        znak = 'Весы ♎';
    }else if (((M == 10) && (D >= 23)) || ((M == 11) && D <= 21)){
        znak = 'Скорпион ♏';
    }else if (((M == 11) && (D >= 22)) || ((M == 12) && D <= 21)){
        znak = 'Стрелец ♐';
    }else if (((M == 12) && (D >= 22)) || ((M == 1) && D <= 19)){
        znak = 'Козерог ♑';
    }else if (((M == 1) && (D >= 20)) || ((M == 2) && D <= 18)){
        znak = 'Водолей ♒';
    }else if (((M == 2) && (D >= 19)) || ((M == 3) && D <= 20)){
        znak = 'Рыбы ♓';
    }
    document.querySelector('#zodiac').innerText = znak;
}
document.querySelector('#btn-zodiac').onclick = zodiak;

// 5. Создайте input куда пользователь может ввести год рождения. Программа должна вывести символ года по китайскому календарю. Подумайте как можно упростить программу.
function kitay(){
    let Y = (document.querySelector('#year')).value;
    Y = parseInt(Y);
    let k_znak = 'Введен некорректный год';
    if (Y % 12 == 4){
        k_znak = 'крыса';
    }else if (Y % 12 == 5){
        k_znak = 'бык';
    }else if (Y % 12 == 6){
        k_znak = 'тигр';
    }else if (Y % 12 == 7){
        k_znak = 'кролик';
    }else if (Y % 12 == 8){
        k_znak = 'дракон';
    }else if (Y % 12 == 9){
        k_znak = 'змея';
    }else if (Y % 12 == 10){
        k_znak = 'лошадь';
    }else if (Y % 12 == 11){
        k_znak = 'коза';
    }else if (Y % 12 == 0){
        k_znak = 'обезьяна';
    }else if (Y % 12 == 1){
        k_znak = 'петух';
    }else if (Y % 12 == 2){
        k_znak = 'собака';
    }else if (Y % 12 == 3){
        k_znak = 'свинья';
    }
    document.querySelector('#china').innerText = k_znak;
}
document.querySelector('#btn-china').onclick = kitay;