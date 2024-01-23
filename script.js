const numbers = document.querySelector('#numbers')
//console.log(numbers)

// create numbers buttons

const divZero = document.createElement('div')
divZero.setAttribute('class', 'numbers zero')
const zero = document.createElement('button');
zero.textContent = 0;
zero.setAttribute('id', 0);
zero.setAttribute('class','numbers zero');

divZero.appendChild(zero)
numbers.append(divZero)


for (let i = 1; i < 10; i++){
    const numberButtons = document.createElement('button')

    numberButtons.textContent = i
    numberButtons.setAttribute('id', i)
    numberButtons.setAttribute('class', 'numbers')
    //console.log(numberButtons.textContent)
    numbers.append(numberButtons)
}

function add(x,y) {
    a = Number(x);
    b = Number(y);

    let sum = 0 
    sum = x + y
    return sum;
}
function subtract(x,y) {
    a = Number(x);
    b = Number(y);

    let diff = 0 
    diff = x - y
    return diff;
}
function multiply(x,y) {
    a = Number(x);
    b = Number(y);

    let mult = 0 
    mult = x * y
    return mult;
}
function divide(x,y) {
    a = Number(x);
    b = Number(y);

    let divide = 0 
    divide = x / y
    return divide;
}
/*
function math(x,y) {
    console.log(add(x,y));
    console.log(subtract(x,y));
    console.log(multiply(x,y));
    console.log(divide(x,y));

}

//math(40,20)
*/
