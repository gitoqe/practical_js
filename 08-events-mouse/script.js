// 1. Создайте блок напишите текст. Добавьте на созданный блок событие dblclick. Сделайте так, чтобы при двойном клике не выделялся текс внутри блока.
document.querySelector('#no-double-text').onselectstart = function (){
    return false;
}
document.querySelector('#no-double-text').onmousedown = function () {
    return false;
}
document.querySelector('#no-double-text').ondblclick = function(){
    document.querySelector('#no-double-text').innerHTML += ' Еще текст для двойного клика, который нельзя выделить.';
}

// 2.Отключите клик правой кнопкой мыши на документе.
document.querySelector('html').oncontextmenu = function(){
    return false;
}

// 3. Создайте блок. В качестве фона добавьте изображение закрытой папки. Добавьте событие, чтобы при наведении мыши изображение закрытой папки сменялось изображением открытой папки. При уведении мыши с блока - все возвращалось в исходный вид.
let papka = document.querySelector('#magic-img');
papka.style.background = 'none';
papka.style.backgroundImage = 'url(http://s1.iconbird.com/ico/0612/Aurora/w256h2561339789847icontextoaurorafoldersclose.png)';
papka.onmouseenter = function(){
    papka.style.backgroundImage = 'url(http://s1.iconbird.com/ico/0612/Aurora/w256h2561339789902icontextoaurorafoldersopen.png)';
}
papka.onmouseleave = function(){
    papka.style.backgroundImage = 'url(http://s1.iconbird.com/ico/0612/Aurora/w256h2561339789847icontextoaurorafoldersclose.png)';
}

// 4. Создайте несколько блоков с разными классами. Добавьте событие, чтобы при наведении мыши блок окрашивался в случайный цвет. Для генерации цвета используйте функцию, которая возращает строку вида rgb(23, 45, 66) со случайными числами.
function makeRandomRGB(){
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let RGB = 'rgb(' + r + ', ' + g + ', '+ b + ')';
    return RGB;
}
document.querySelector('.one').onmouseenter = function (){
    document.querySelector('.one').style.background = makeRandomRGB();
}
document.querySelector('.two').onmouseenter = function (){
    document.querySelector('.two').style.background = makeRandomRGB();
}
document.querySelector('.three').onmouseenter = function (){
    document.querySelector('.three').style.background = makeRandomRGB();
}

// нумерация заданий
let task_number = document.querySelectorAll('h3');
for (let i = 0; i < task_number.length; i++) {
    task_number[i].insertAdjacentHTML("beforeend", ' ' + (i + 1) + '.');
}