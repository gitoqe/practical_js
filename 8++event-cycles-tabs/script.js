//todo 8.2 табы

// сокрытие элементов
function init(){
    let tab_Body = document.querySelectorAll('.tab-body'); //все элементы body
    for (let i = 1; i < tab_Body.length; i++) {
        tab_Body[i].style.display = 'none';
    }
}
init();

let tab = document.querySelectorAll('.tab');
tab.forEach(function(element){
    element.onclick = showTabs;
});
function showTabs(){
    let data = this.getAttribute('data');
    console.log(data);

    // сокрытие всех элементов - аналог init()
    let tab_Body = document.querySelectorAll('.tab-body'); //все элементы body
    for (let i = 0; i < tab_Body.length; i++) {
        tab_Body[i].style.display = 'none';
    }

    // поиск необходимого для отображения элемента
    // составной запрос с использованием CSS-синтаксиса
    // .класс[атрибут=значение]
    document.querySelector('.tab-body[data="'+data+'"]').style.display = 'block';

}



//todo 8.1 события и циклы
{
/*
//! применение события к множеству элементов
let blocks = document.querySelectorAll('.block');
console.log(blocks);
/*
for (let i = 0; i < blocks.length; i++) {
    blocks[i].onclick = function(){
        console.log('work');
    }
}


//! другой вариант получения элементов
let blocks2 = document.getElementsByClassName('block');
console.log(blocks2);

//! обработка через forEach()
/*
blocks.forEach(function(element){
    console.log(element);
    element.onclick = function(){
        console.log('work');
    }
})


// нумерация заданий
let task_number = document.querySelectorAll('h3');
for (let i = 0; i < task_number.length; i++) {
    task_number[i].insertAdjacentHTML("beforeend", ' ' + (i + 1) + '.');
}
*/
}