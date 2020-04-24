// Задача 1. Создайте input в который пользователь может вводить текст на латинице. Используя события клавиатуры перехватывайте введенный символ - если пользователь ввел маленькую (строчную) букву, выводите ее. Если большую (пропись) - удаляйте. Ограничте возможность введения только буквами.
document.querySelector('#latin').onkeypress = function(k){
    if (!(k.charCode >= 97 && k.charCode <= 122)){
        return false;
    }
}

// Задача 2. Создайте один блок внутри другого. На внутренний блок добавьте возможность сдвига блока вправо, влево, вверх, вниз с помощью клавиш стрелок. Бонус - добавьте на пробел возможность поворота фигуры вокруг оси на 45 градусов.
let horizon = 0;
let vertical = 0;
let grade = 0;
document.onkeydown = function(q){
    let vnutr = document.querySelector('.vnutr');
    if (q.keyCode == 39){
        horizon += 10;
        vnutr.style.marginLeft = horizon + 'px';
    }
    if (q.keyCode == 37){
        horizon -= 10;
        vnutr.style.marginLeft = horizon + 'px';
    }
    if (q.keyCode == 38){
        vertical -= 10;
        vnutr.style.marginTop = vertical + 'px';
    }
    if (q.keyCode == 40){
        vertical += 10;
        vnutr.style.marginTop = vertical + 'px';
    }
    if (q.keyCode == 32){
        grade += 45;
        vnutr.style.transform = 'rotate(+' + grade + 'deg)';
    }
}

// Задача 3. Напишите программу которая при нажатии кнопки клавиатуры меняет символ на произвольный.
let sign = document.querySelector('#sign');
document.onkeypress = function(q){
    let num = Math.round(Math.random()*2000);
    sign.innerHTML = '&#' + num + '; ';
}

// Задача 4. Напишите программу шутку которая меняет введенный символ q на w, w на e и т.д. Т.е. выполняет сдвиг на одну клавишу влево на клавиатуре. Последние символы строк меняет так: ] на q, \ на a, / на z. Возможно для решения потребуется массив.
const keyB = {
    q:'w', w:'e', e:'r', r:'t', t:'y', y:'u', u:'i', i:'o', o:'p', p:'[', '[':']', ']':'q',
    a:'s', s:'d', d:'f', f:'g', g:'h', h:'j', j:'k', k:'l', l:';', ';':'"', '\'':'a', 
    z:'x', x:'c', c:'v', v:'b', b:'n', n:'m', m:',', ',':'.', '.':'/', '/':'z'
}
document.querySelector('#joke').onkeypress = function(y){
    document.querySelector('#rezult').innerText += keyB[y.key];
}


// нумерация заданий
let task_number = document.querySelectorAll('h3');
for (let i = 0; i < task_number.length; i++) {
    task_number[i].insertAdjacentHTML("beforeend", ' ' + (i + 1) + '.');
}