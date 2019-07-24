//! применение события к множеству элементов
let blocks = document.querySelectorAll('.block');
console.log(blocks);
/*
for (let i = 0; i < blocks.length; i++) {
    blocks[i].onclick = function(){
        console.log('work');
    }
}
*/

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
*/

// нумерация заданий
let task_number = document.querySelectorAll('h3');
for (let i = 0; i < task_number.length; i++) {
    task_number[i].insertAdjacentHTML("beforeend", ' ' + (i + 1) + '.');
}