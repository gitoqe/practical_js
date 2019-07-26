// Повторите действия урока.
let block1 = document.querySelector('.block-1');
block1.style.width = '200px'
//console.log(block1.style);

block1.classList.add('red');
block1.classList.add('green');

block1.classList.remove('green');

//console.log(block1.classList); // все классы
//console.log(block1.classList.contains('red')); // наличие
block1.classList.toggle('red'); //переключение

// Реализуйте модальное окно, которое будет скрываться и показываться с помощью добавления CSS класса hide. Как и раньше открыть и закрыть окно можно с помощью кнопок. Добавить возможность закрывать окно (добавлять .hide) при нажатии клавиши Esc.
let modal = document.querySelector('.modal');
let btnOff = document.querySelector('.btn-off');
let btnOn = document.querySelector('.btn-on');
document.onkeydown = function(a){
    if (a.keyCode == 27){
        modal.classList.add('hide');
        btnOff.classList.add('hide');
    }
}
btnOn.onclick = function(){
    modal.classList.remove('hide');
    btnOff.classList.remove('hide');
}
btnOff.onclick = function(){
    modal.classList.add('hide');
    btnOff.classList.add('hide');
}




// нумерация заданий
let task_number = document.querySelectorAll('h3');
for (let i = 0; i < task_number.length; i++) {
    task_number[i].insertAdjacentHTML("beforeend", ' ' + (i + 1) + '.');
}