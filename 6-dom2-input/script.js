// 1. Повторите действия указанные в уроке. Добавьте кнопку, при нажатии на которую считывается цвет выбранный пользователем (input type=color), и применяется к фону страницы.
function setColor(){
    let new_Color = document.querySelector('.ch-color').value;
    //console.log(new_Color);
    document.querySelector('body').bgColor = new_Color;
}
document.querySelector('#btn-color').onclick = setColor;

// 2. Создайте два input[type=color]. В одном пользователь может выбрать цвет фона, во втором цвет текста. При нажатии на кнопку Применить - примените эти цвета к странице. Также добавьте кнопку сброса цвета на черный-белый.
function setBgAndTextColor(){
    let bg_color = document.querySelector('.fon-color').value;
    let text_color = document.querySelector('.text-color').value;
    document.querySelector('body').bgColor = bg_color;
    document.querySelector('body').text = text_color;
}
function reset(){
    document.querySelector('body').bgColor = '#ffffff';
    document.querySelector('body').text = '#000000';
}
document.querySelector('#btn-ft-color').onclick = setBgAndTextColor;
document.querySelector('#btn-reset').onclick = reset;

// 3. Добавьте input[type=range] начальным значением которого есть число 14, а конечным 48. Ползунок установлен на 16. При изменении положения ползунка меняйте размер текста в соответствии со значением.
function setTextSize(){
    let text_size = document.querySelector('#size-range').value;
    document.querySelector('body').style.fontSize = text_size + 'px';
    //console.log(text_size);
}
document.querySelector('#btn-size').onclick = setTextSize;

// 4. Рядом с созданным ползунком добавьте span куда выводите текущее значение ползунка. Для этого используйте событие input, oninput.
document.querySelector('#current-range').innerText = document.querySelector('#size-range').min; //вывод значения по умолчанию
function setCurrent (){
    let text_size = document.querySelector('#size-range').value;
    document.querySelector('#current-range').innerText = text_size;
}
document.querySelector('#size-range').oninput = setCurrent;

// 5. Создайте три input type=range. Значения от нуля до 255. Создайте блок, цвет rgb которого определятеся значением на ползунках. При изменении положения ползунков, изменяется цвет блока. Возле каждого ползунка выводить текущее значение цвета.
function setRGB(){
    // получение значений
    let r = document.querySelector('#r-red').value;
    let g = document.querySelector('#r-green').value;
    let b = document.querySelector('#r-blue').value;
    // вывод значений
    document.querySelector('#current-red').innerText = r;
    document.querySelector('#current-green').innerText = g;
    document.querySelector('#current-blue').innerText = b;
    r = parseInt(r);
    g = parseInt(g);
    b = parseInt(b);
    let div_color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
    //console.log(r+' '+g+' '+b);
    console.log('#'+r.toString(16)+g.toString(16)+b.toString(16));
    //console.log('#'+r.toString(16)+g.toString(16)+b.toString(16));
    document.querySelector('.rgb').style.backgroundColor = div_color;
}
document.querySelector('#r-red').oninput = setRGB;
document.querySelector('#r-green').oninput = setRGB;
document.querySelector('#r-blue').oninput = setRGB;