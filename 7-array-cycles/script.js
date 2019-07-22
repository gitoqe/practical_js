// 1. Выведите на экран числа от 0 до 100.
let p_sto = document.querySelector('#sto');
for (let i = 0; i <= 100; i++) {
    p_sto.innerHTML += i + ' ';
}

// 2. Вывести четные числа от 0 до 101.
let p_chet = document.querySelector('#chet');
for (let i = 0; i < 101; i++) {
    if (i % 2 == 0){
        p_chet.innerHTML += i + ' ';
    }
}

// 3. Вывести числа в следущей последовательности: 200 199 198 ... 0.
let p_reverse = document.querySelector('#reverse');
for (let i = 200; i >= 0; i--) {
    p_reverse.innerHTML += i + ' ';
}

// 4. Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).
let p_sum_sto = document.querySelector('#sum-sto');
let sum_sto = 0;
for (let i = 0; i <= 100; i++) {
    sum_sto += i;
}
p_sum_sto.innerHTML = 'Сумма чисел от 0 до 100 равна ' + sum_sto;

// 5. Задайте два input. В первый вводится число, во второе его степень. С помощью цикла возведите число в степень. Напечатайте результат.
function pow(){
    let x = document.querySelector('#base').value;
    let y = document.querySelector('#power').value;
    let otvet = 1;
    for (let i = 1; i <= y; i++) {
        otvet *= x;
    }
    document.querySelector('#pow').innerHTML = otvet;
}
document.querySelector('#base').oninput = pow;
document.querySelector('#power').oninput = pow;

/* 6. С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.
Т.е.: 
1*7=7  
2*7=14 
3*7=21...
*/
let seven = document.querySelector('#seven');
for (let i = 1; i <= 9; i++) {
    seven.innerHTML += i + '*' + '7' + '=' + i*7 +'<br>';
}

// 7. С помощью цикла вывести произведение чисел от 1 до 50.
let proizved = document.querySelector('#proizved');
let otvet_proizv = 1;
for (let i = 1; i <= 50; i++) {
    otvet_proizv *= i;
}
proizved.innerHTML = 'Произведение чисел от 1 до 50 равно ' + otvet_proizv;

// 8. Выведите с помощью цикла коды спецсимволов от 1000 до 2000. Напомню, что спецсимвол получается комбинацией &#число; Например &#1222;
let spec_code = document.querySelector('#spec-code');
for (let i = 1000; i <= 2000; i++) {
    spec_code.innerHTML += '&#' + i + '; ';
}

// 9. Получите все параграфы внутри div.main страницы. Используя цикл пронумеруйте все параграфы. Номер добавьте внутри тега параграфа перед текстом.
let main_array = document.querySelectorAll('.main p');
for (let i = 0; i < main_array.length; i++) {
    main_array[i].insertAdjacentHTML("afterbegin", i + 1 + '. ');
}

// 10. Создайте два поля. В одно пользователь вводит день рождения, во второй - месяц (в виде числа). Выведите знак зодиака под каким родился пользователь. Данные о знаке зодиака храните в массиве.
let calend = [
    // name, month-start, day-start, month-end, day-end
    ['Овен ♈', 3, 21, 4, 19],
    ['Телец ♉', 4, 20, 5, 20],
    ['Близнецы ♊', 5, 21, 6, 20],
    ['Рак ♋', 6, 21, 7, 22],
    ['Лев ♌', 7, 23, 8, 22],
    ['Дева ♍', 8, 23, 9, 22],
    ['Весы ♎', 9, 23, 10, 22],
    ['Скорпион ♏', 10, 23, 11, 21],
    ['Стрелец ♐', 11, 22, 12, 21],
    ['Козерог ♑', 12, 22, 1, 19],
    ['Водолей ♒', 1, 20, 2, 18],
    ['Рыбы ♓', 2, 19, 3, 20]
]
function zodiak(){
    let D = document.querySelector('#day').value;
    let M = document.querySelector('#month').value;
    let znak = document.querySelector('#znak');
    for (let i = 0; i < calend.length; i++) {
        console.log(calend[i][0]);
        if (((M == calend[i][1]) && (D >= calend[i][2])) || 
            ((M == calend[i][3]) && (D <= calend[i][4]))){
            znak.innerHTML = calend[i][0];
        }
    }
}
document.querySelector('#day').oninput = zodiak;
document.querySelector('#month').oninput = zodiak;

//11. С помощью JS найдите все span на странице и сделайте им цвет фона - желтый.
let all_span = document.querySelectorAll('span');
for (let i = 0; i < all_span.length; i++) {
    all_span[i].style.backgroundColor = 'yellow';
}

//12. Выведите внизу страницы информацию о количестве параграфов.
document.querySelector('#p-count').innerHTML = document.querySelectorAll('p').length;


//13. Создайте массив состояний из единицы и 5 нулей. Т.е. [1, 0,0,0,0,0]. Выведите массив на страницу. Добавьте кнопку. При каждом нажатии кнопки смещайте единицу вправо на одну позицию и заново выводите массив в тот же блок что и раньше. Если единица достигла конца массива - не делайте ничего.
let five_array = [1, 0, 0, 0, 0, 0];
document.querySelector('#five').innerHTML = five_array;
//let five_counter = 0;
function fiveMove(){
    //five_counter += 1;
    if (five_array[5] != 1){ 
        for (let i = 0; i < five_array.length; i++) {
            if (five_array[i] == 1){
                five_array[i] = 0;
                five_array[i+1] = 1;
                break;
            }
        }
    }
    document.querySelector('#five').innerHTML = five_array;
}
document.querySelector('#btn-five').onclick = fiveMove;

// 14. Создайте массив с произвольными числами. Выведите количество элементов массива меньше нуля.
let rand_array = [];
let rand_count = Math.round(Math.random()*10);
let negative = 0;
for (let i = 0; i < rand_count; i++) {
    rand_array[i] = Math.round(Math.random()*50 - 25);
    if (rand_array[i] < 0){
        negative++;
    }
}
document.querySelector('#rand-array').innerHTML = rand_array;
document.querySelector('#rand-count').innerHTML = rand_count;
document.querySelector('#negative').innerHTML = negative;

// 15. Создайте массив с произвольными числами. Выведите элементы массива меньше нуля.
let array_menshe = [];
let rand_count2 = Math.round(Math.random()*10);
for (let i = 0; i < rand_count2; i++) {
    array_menshe[i] = Math.round(Math.random()*50 - 25);
    document.querySelector('#array-menshe').innerHTML += array_menshe[i] + ' ';
    if (array_menshe[i] < 0){
        document.querySelector('#lower-zero').innerHTML += array_menshe[i] + ' ';
    }
}

// 16. Создайте input куда пользователь может ввести количество элементов массива. После нажатия кнопки создается массив заданной длинны заполненный единицами.
let array_one = [];
function setArr(){
    let elem_num = document.querySelector('#elem-num').value;
    for (let i = 0; i < elem_num; i++) {
        array_one[i] = 1;
    }
    document.querySelector('#array-one').innerHTML = array_one;
}
document.querySelector('#btn-one').onclick = setArr;

// 17. Создайте input куда пользователь может ввести количество элементов массива. После нажатия кнопки создается массив заданной длинны заполненный случайными числами от 0 до 100.

/*
18. Создайте массив заполненный числами и строками. Используя цикл создайте другой массив куда поместите только числа из первого массива.

19. Создайте массив. Выведите максимальное значение из этого массива.

20! Сложное! Создайте массив и заполните его значениеми. Выведите статистику - сколько раз в массиве повторяется то или инное значение.

Внимание! Подсказка!

Решить задачу можно просто если заранее выполнить анализ ситуации. Нам нужна статистика, сколько встречается какое число. Т.е. нам нужно что-то вида: число 5 встречается 2 раза, число 33 всречается 3 раза. Согласитесь, это очень похоже на ассоциативный массив:


let b = { 5: 2, 33 : 3}	
Итак, мы должны создать ассоциативный массив куда будем складывать результаты анализа сайта. Мы создадим его для того, чтобы класть наши результаты. Теперь начнем перебирать исходный массив:


let a = [22, 3, 1, 22, 3, 5, 67, 32, 1, 3];
let b = {} // наш массив для результатов
for (let i = 0; i < b.length; i++) {

}
Теперь мы должны выполнить следующие действия - берем i-й элемент массива a и проверяем, есть ли он в массиве b. Если есть, увеличиваем на единицу, если нет - создаем и присваиваем значениен 1. Теперь по проходу массива а в b будет лежать статистика. Т.е. всего нам понадобился один цикл


let a = [22, 3, 1, 22, 3, 5, 67, 32, 1, 3];
let b = {} // наш массив для результатов
for (let i = 0; i < b.length; i++) {
if (b[a[i]] == undefined) {
	b[a[i]] = 1;
}
else {
	b[a[i]]++;
}
}
*/

// нумерация заданий
let task_number = document.querySelectorAll('h3');
for (let i = 0; i < task_number.length; i++) {
    task_number[i].insertAdjacentHTML("beforeend", ' ' + (i + 1) + '.');
}
