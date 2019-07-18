/* 1. Создайте два файла css - один подключите сразу. Во втором пропишите стили так, чтобы скрывались все изображения, фоны и блоки. Оставался один текст, весь текст черным, выравнивание по левому краю, шрифт - serif. Добавьте кнопку при нажатии на которую вы должны получить элемент link href - где прописан путь к файлу css и заменить его на второй файл. Т.е. было:
<link rel="stylesheet" href="style1.css">
стало
<link rel="stylesheet" href="style2.css">
Кнопка также должна скрываться.
*/
function changeStyle(){
    document.querySelector('link').href = 'style2.css';
    document.querySelector('#btn-style').hidden = true;
}
document.querySelector('#btn-style').onclick = changeStyle;

/* 2. Создайте параграф с текстом Hello. Добавьте кнопку. При нажатии кнопки к содержимому параграфа добавьте word. При каждом нажатии - добавляйте слово world. т.е:
    нажатие 1
        Hello word
    нажатие 2
        Hello word word
и так далее. Сколько нажатий - столько word и добавляете.*/
function hello(){
    let text = document.querySelector('#hw').innerText;
    document.querySelector('#hw').innerText = text + ' word';
}
document.querySelector('#btn-hw').onclick = hello;

// 3. Создайте параграф с текстом Hello. При нажатии кнопки между тегом p и словом Hello добавьте любой текст. Используйте insertAdjacentHTML.
function any(){
    document.querySelector('#any').insertAdjacentHTML("afterbegin",' any text');
}
document.querySelector('#btn-any').onclick = any;

// 4. Создайте параграф с текстом Hello. При нажатии кнопки перед тегом p добавьте любой текст. Используйте insertAdjacentHTML.
function dop(){
    document.querySelector('#dop').insertAdjacentHTML("beforebegin",' qwe');
}
document.querySelector('#btn-dop').onclick = dop;

// 5. Создайте параграф с текстом Hello. При нажатии кнопки после слова Hello и перед закрывающимся тегом p добавьте любой текст. Используйте insertAdjacentHTML.
function doiposle(){
    document.querySelector('#doiposle').insertAdjacentHTML("beforeend",' qwe');
}
document.querySelector('#btn-doiposle').onclick = doiposle;

// 6. Создайте параграф с текстом Hello. При нажатии кнопки перезатрите содержимое параграфа строкой <b>Hi</b>. Вставку произведите сналача с помощью innerHTML, затем с помощью innerText. Изучите отличия вставки.
function perein(){
    document.querySelector('#perein').innerHTML = '<b>Hi</b>';
    // HTML - учитывает теги, Text - нет
}
document.querySelector('#btn-perein').onclick = perein;

// 7. Создайте параграф с текстом Hello. При нажатии кнопки перезатрите параграф строкой <b>Hi</b>. Вставку произведите сналача с помощью outerHTML, затем с помощью outerText. Изучите отличия вставки.
function pereout(){
    document.querySelector('#pereout').outerHTML = '<b>Hi</b>';
    // HTML - учитывает теги, Text - нет
}
document.querySelector('#btn-pereout').onclick = pereout;