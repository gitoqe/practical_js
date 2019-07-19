// VS CODE
    ! в html    //* создание каркаса страницы
    p#aydi      //* создать тег p с id=qwe

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

// Генерация чисел
    Math.random();  //* генерация от 0 до 1
    //* округление
            Math.round()

// перезагрузка страницы 
    location.reload();
    
//todo -----lesson 5-----
// Изменение парного тэга
    //! innerHTML
    //? отвечает за изменение внутренностей парных тегов
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

//todo -----lesson 6-----
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

//todo -----lesson 7-----


//todo -----lesson 8-----
//todo -----lesson 9-----
//todo -----lesson 10----
//todo -----lesson 11----



