// 1. Создайте блок напишите текст. Добавьте на созданный блок событие dblclick. Сделайте так, чтобы при двойном клике не выделялся текс внутри блока.
document.querySelector('#no-double-text').onselectstart = function (){
    return false;
}
document.querySelector('#no-double-text').onmousedown = function () {
    return false;
}
document.querySelector('#no-double-text').ondblclick = function(){
    document.querySelector('#no-double-text').innerHTML += 'Текст для двойного клика.';
}


// 2.Отключите клик правой кнопкой мыши на документе.

// 3. Создайте блок. В качестве фона добавьте изображение закрытой папки. Добавьте событие, чтобы при наведении мыши изображение закрытой папки сменялось изображением открытой папки. При уведении мыши с блока - все возвращалось в исходный вид.

// 4. Создайте несколько блоков с разными классами. Добавьте событие, чтобы при наведении мыши блок окрашивался в случайный цвет. Для генерации цвета используйте функцию, которая возращает строку вида rgb(23, 45, 66) со случайными числами.


// нумерация заданий
let task_number = document.querySelectorAll('h3');
for (let i = 0; i < task_number.length; i++) {
    task_number[i].insertAdjacentHTML("beforeend", ' ' + (i + 1) + '.');
}