//* случайный цвет в формате rgb(X,X,X)
function makeRandomRGB(){
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let RGB = 'rgb(' + r + ', ' + g + ', '+ b + ')';
    return RGB;
}

//* нумерация заданий
let task_number = document.querySelectorAll('h3');
for (let i = 0; i < task_number.length; i++) {
    task_number[i].insertAdjacentHTML("beforeend", ' ' + (i + 1) + '.');
}

//* изменение курсора при наведении в CSS
.tab{
    cursor: pointer;
}

//* исправление ошибок
// css
#rework{
    margin: 25px;
    font-size: 16pt;
}
#mistake{
    padding: 15px;
    font-style: italic;
    background-color: rgba(144, 238, 144, 0.15);
}



//* работа с модальным окном
https://moonback.ru/page/modal-window-html-css-only