const numbers = document.querySelector('#numbers')
console.log(numbers)

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
    console.log(numberButtons.textContent)
    numbers.append(numberButtons)
}


