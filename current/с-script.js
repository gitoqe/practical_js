//todo pre-8
// document.querySelector('p').innerHTML = 'bye';//получение параграфа
//todo  8 Lesson
document.querySelector('.onclick').onclick = function(){
    console.log('click');
}
document.querySelector('.ondblclick').ondblclick = function(){
    console.log('dblclick');
}
document.querySelector('.mm').onmousemove = function(){
    console.log('mousemove');
}
document.querySelector('.onmouseenter').onmouseenter = function(){
    console.log('mouseenter')
}
document.querySelector('.onmouseleave').onmouseleave = function(){
    console.log('mouseleave')
}
document.querySelector('.onmousewheel').onmousewheel = function(){
    console.log('mousewheel')
}
