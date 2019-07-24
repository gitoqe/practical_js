//! ассоциативный массив

//todo -----lesson 1-----
{
// VS CODE автозаполнение
    ! в html    //* +таб создание каркаса страницы
    p#aydi      //* +таб создать тег p с id=qwe
    ctrl-d      //* несколько курсоров
    .класс      //* +таб создание div с классом
// Работа страницы
    //* загрузка файла js в конце документа - сначала состав, затем скрипт

// Вывод в консоль
    console.log(temp);
    console.log('Temp =' + temp);

// Создание переменной
    let Name;

// ID
    //* id нужен для идентификации элемента

// Подключение по ID
    id.innerHTML    //* содержимое тега.
    out.innerHTML = <i>123</i>
    id.innerText    //* не обрабатывает теги

// Обращение по ID в текущем документе
    document.getElementById('id').innerHTML = 123;
    let p;
    p =  document.getElementById('id');

// Обращение по ID. Работает быстрее
    document.querySelector('#id');

// Функции
    //* можно объявлять и после вызова

// События
    //* вызов по событию - без скобок
        btn.onclick = hello;

// Изменение стилей
    //* можно упоминать параметры стиля через точку
    //* в таком случае они отображаются в F12 в разделе style
        modal.style.display = 'block';

    //* Если стиль из двух слов - пишем в верблюжьемСтиле

// Сравнение
    ===     //* сравнение по данным и по типу
    &&      //* и
    ||      //* или

// Ввод чисел input
    //? поле
    <input type="text" id="pole"></input>
    //* тип можно менять и выбрать подходящий
    //*  при этом ограничиваются вводимые данные
    //* http://htmlbook.ru/html/input/type

    //? код получения
    let a = document.querySelector('#pole');
    let chislo = a.value;

// перевод строки в число
    parseInt(a)      //* строку в число

// проверка на число  isNaN
    isNaN(a);       //* да - не число, нет - число

// Генерация чисел, случайные числа
    Math.random();  //* генерация от 0 до 1
    //* округление
            Math.round()

// перезагрузка страницы 
    location.reload();

}
//todo -----lesson 5-----
{
// Изменение парного тэга
    //! innerHTML
    //* отвечает за изменение внутренностей парных тегов
    //* вложенные теги обрабатываются и работают
    document.querySelector('тэг').innerHTML = 'текст'; //изменение на примере текста
    //* дозапись
    document.querySelector('тэг2').innerHTML += 'добавочный текст';
    
    //! innerText
        //* изменяет внутренний текст без изменения
        //* не затрагивает теги

    //! outerHTML
        //* заменяет тег и его содержимое
        //* задействует теги

// ПОЗИЦИОННАЯ мультивставка к парному тэгу
    //! .insertAdjacentHTML
        //* https://developer.mozilla.org/ru/docs/Web/API/Element/insertAdjacentHTML
        //* позволяет выбирать место вставка
        .insertAdjacentHTML(позиция, текст);
        //* Позиции:
            'beforebegin'
            //Перед element .
            'afterbegin'
            //Внутри element, перед первым дочерним элементом (потомком).
            'beforeend'
            //Внутри element, после последнего дочернего элемента.
            'afterend'
            // После element.

// поиск тега внутри другого
    //* в поиске указывается сложный запрос 
        document.querySelector('.class tag');

// если атрибут можно получить, то его можно заменить
    document.querySelector('img').src = 'qwe.jpg';

}
//todo -----lesson 6-----
{
// получение данных через input

//анонимная функция - функция без имени, работает только в одном месте
    document.querySelector('# aqwe').onclick = function (){
        //команды
    }
    //также есть стрелочные функции

// типы инпутов
    input type='' // http://htmlbook.ru/html/input/type
    
    //* checkbox
    <input type="checkbox" class="ch1" id="ch1"> </input>
    // id
        <label for="ch1">123</label>
    // для работы с опциями выбирать можно по id и по class
    document.querySelector('#ch1').checked //вернет true/false

// radio
    <input type="radio" class="rad" id='rad1' name='имя_списка'></input>
        <label for="rad1"> ONE </label>
    <input type="radio" class="rad" id='rad2' name='имя_списка'></input>
        <label for="rad1"> TWO</label>
    
    //! имя списка связывает инпут-радио блоки в один, позволяя выбрать только один из списка 
    //! крайне желательно отмечать одну из опций с помощью атрибута checked
        checked='checked';
    //* проверку можно проводить по id нужного элемента и .checked

// поиск элемента по классу с установленным атрибутом
    document.querySelector('.класс[атрибут="значение"]').checked; // true/false о пометке
    document.querySelector('.класс[атрибут="значение"]').value; // значение атрибута value у опции - задается заранее

}
//todo -----lesson 7----- CYCLE, ARRAY
{
// выбор по классу
.querySelectorAll('')
    //? собирает элементы такого класса/id и образует из них массив
    // команды, применимые к одному элементу, нельзя применить к набору (массиву)
    massiv[0];      //* обращение к элементу
    massiv.length;  //* длина массива / коллекции
    massiv.value;   //* значение элемента
    massiv.checked; //* свойство _radio_ о галке
        if(massiv[i].checked){ ...} //* поиск отмеченного элемента
//! массивы в js с 0 - классика
// nod-а - это узел структуры html-страницы

// выпадающий список
    <select name="" id="">
        <option value=""></option>
    </select>
    .selected;  // выбранное
    .value;     // значение
    .innerHTML   // содержимое
// поиск внутри элемента
    document.querySelectorAll('#idshnik option')

}
//todo -----lesson 8-----   EVENTS
{
//! https://developer.mozilla.org/ru/docs/Web/API/MouseEvent
// перед событиями в свойствах элемента ставится приставка _on_
// события мыши
    .onclick;       // клик
    .ondblclick;    // двойной клик
    .onmousemove;   // движение мыши
                    //* срабатывает 1 раз
                    //* напрягает производительность
                    //* движение на 1 пиксель может не срабатывать
                    //* хранит информацию: откуда пришли
    .onmouseenter;  // вхождение мыши на область объекта
                    //* срабатывает 1 раз
                    //* схоже с hover (но это наведение)
                    //* хранит информацию: откуда пришли
    .onmousewheel;  // движение колеса мыши
        // блокирование прокрутки (чтобы назначить другую задачу)
        // добавить в функцию return false;
    .oncontextmenu; // пкм меню
                    // бесполезно (смартфоны)
        // добавление return false; скрывает возможность вывода контекстного меню

// когда происходит событие, вся информация о нем сохраняется в глобальном объекте события.
//

// безымянная функция
    document.querySelector('.класс или id или тег').ивент = function(){
        console.log('click');
    }
}
//todo -----lesson 8 bonus
{
//* querySelectorAll дает коллекцию элементов
    // выбор через querySelector применяется только к первому встреченному элементу
    // событие нельзя присвоить коллекции элементов


//* обработка через forEach()
blocks.forEach(function(element){   // автоматически проходит по массиву
    console.log(element);
    element.onclick = function(){
        console.log('work');
    }
})

//* переменная this
    // меняется в зависимости от параметров применения
    //при работе с элементом внутри функции this примет значение самого элемента
    let alpha = 5;
    alpha.vivod;
    function vivod(){
        console.log(this);
        this.style.background = 'red';
    }
//* функция .getAttribute('атрибут')
    // позволяет считать атрибут

}
//* изменение курсора при наведении в CSS
    .tab{
        cursor: pointer;
    }
//* составной запрос с использованием CSS-синтаксиса
    // .класс[атрибут=значение]
    .tab[color=red;];
    //совмещение переменных и текста в запросе
    //! кавычки!
        document.querySelector('.tab-body[data="'+data+'"]').style.display = 'block';
        //! обратный апостроф `     для ES6?
        document.querySelector(`.tab-body[data="${+data+}"]`).style.display = 'block';

// атрибут data-...
    //* используется для выделения элемента среди себе подобных
//todo -----lesson 9-----
//todo -----lesson 10----
//todo -----lesson 11----



