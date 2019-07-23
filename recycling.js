// случайный цвет в формате rgb(X,X,X)
function makeRandomRGB(){
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let RGB = 'rgb(' + r + ', ' + g + ', '+ b + ')';
    return RGB;
}