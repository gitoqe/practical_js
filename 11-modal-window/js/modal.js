//событие при нажатии кнопок класса modal-show
// получаем все кнопки с классом
document.querySelectorAll('.modal-show').forEach(function(element){
    element.onclick = showModal;
})
function showModal(){
    // получение значения data-modal атрибута
    let modalId = this.dataset.modal; 
    // получение родительского элемента
    console.log(document.querySelector(modalId).parentElement);
    //удаление класса hide
    document.querySelector(modalId).parentElement.classList.remove('hide');
    document.querySelector(modalId).classList.remove('hide');
}