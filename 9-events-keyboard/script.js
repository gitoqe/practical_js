//todo имена файлов:        - -> _
//todo имена архивов:       js_les9.zip -> js_unit_9.zip
//todo имена переменных:    sup_alpha -> supAlpha
//todo константы:           CONSTANTA
//todo функции:             анонимные > именованные
//todo html:                условие задачи в html
//todo 

// Задача 1. Создайте input в который пользователь может вводить текст на латинице. Используя события клавиатуры перехватывайте введенный символ - если пользователь ввел маленькую (строчную) букву, выводите ее. Если большую (пропись) - удаляйте. Ограничте возможность введения только буквами.
document.querySelector('#latin').onkeypress = function(k){
    if (!(k.charCode >= 97 && k.charCode <= 122)){
        return false;
    }
}

// Задача 2. Создайте один блок внутри другого. На внутренний блок добавьте возможность сдвига блока вправо, влево, вверх, вниз с помощью клавиш стрелок. Бонус - добавьте на пробел возможность поворота фигуры вокруг оси на 45 градусов.
let vnutr = document.querySelector('.vnutr');
let horizon = 0;
let vertical = 0;
vnutr.style.left = horizon + 'px';
vnutr.style.top = vertical + 'px';
document.onkeydown = function(m){
    if (m.keyCode == 37){console.log(m.keyCode);
        horizon += 1;
        vnutr.style.left = horizon + 'px';
    }else if (m.keyCode == 38){console.log(m.keyCode);
        vertical -= 1;
        vnutr.style.top = vertical + 'px';
    }else if (m.keyCode == 39){console.log(m.keyCode);
        horizon += 1;
        vnutr.style.left = horizon + 'px';
    }else if (m.keyCode == 40){console.log(m.keyCode);
        vertical += 1;
        vnutr.style.top = vertical + 'px';
    }else{
        console.log(m.keyCode);
    }
}
/*
left = 37
up = 38
right = 39
down = 40
*/

// Задача 3. Напишите программу которая при нажатии кнопки клавиатуры меняет символ на произвольный.



/*
Внимание! Подсказка!

Решать задачу нужно по шагам. Шаг первый, получить событие нажатия клавиши. Внутри функции, которая запускается по нажатию клавиши - нужно сгенерировать случайное число. Чаще всего от 65(код символа A) до 90 (клавиша Z). Получив случайное число в этом диапазоне - преобразовать число в символ с помощью String.fromCharCode(). Полученный символ вывести на экран.
*/

// Задача 4. Напишите программу шутку которая меняет введенный символ q на w, w на e и т.д. Т.е. выполняет сдвиг на одну клавишу влево на клавиатуре. Последние символы строк меняет так: ] на q, \ на a, / на z. Возможно для решения потребуется массив.




/*
Внимание! Подсказка!

Для решения задачи - создайте вспомогательный массив где ключом будет символ, а значением - символ смещения. Т.е.:

const a = {q:"w", w: "e", e:"r"...}
А затем получаем символ, который внес пользователь в переменную. Допустим, в переменную b. Осталось вывести a[b].
*/


// нумерация заданий
let task_number = document.querySelectorAll('h3');
for (let i = 0; i < task_number.length; i++) {
    task_number[i].insertAdjacentHTML("beforeend", ' ' + (i + 1) + '.');
}