let result = 0
let display = ''
let operator = false
let firstNumber = 0
let operatorDisplay = '='
let dotClicked = false

function clear () {
    operator = false
    dotClicked = false
    display = ''
    result = 0
    firstNumber = 0
    operatorDisplay = '='
    resultElement.value = display
}

const add = (x, y) => {
    let theResult = x+y
    return theResult.toFixed(5)
}

const subtract = (x, y) => {
    let theResult = x-y
    return theResult.toFixed(5)
}

const multiply = (x, y) =>{
    let theResult = x*y
    return theResult.toFixed(5)
}

const divide = (x, y) => {
    if(y === 0){
        clear()
        alert("you can't divide by zero")
        return ''
    }
    let theResult = x/y
    return theResult.toFixed(5)
}

const divideElement = document.getElementById('divide')
const multiElement = document.getElementById('divide')
const addElement = document.getElementById('add')
const subElement = document.getElementById('subtract')
const clearElement = document.getElementById('clear')
const resultElement = document.getElementById('result')

resultElement.value = display
const buttons = document.getElementsByTagName('button')
clearElement.addEventListener('click', clear)

resultElement.value = display

const operate = (element) => {
    if(element.classList.contains('number')){
        if(dotClicked){
            display += element.textContent
        } else {
            display = element.textContent
        }
        if(operator){
            result = parseFloat(display)
        }
        else {
            firstNumber = parseFloat(display)
        }
    } else if(element.classList.contains('operator')){
        dotClicked = false
        if(operator){
            result = parseFloat(display)
            if(operatorDisplay === '+'){
                display = add(firstNumber, result)
            } else if (operatorDisplay === '-'){
                display = subtract(firstNumber, result)
            } else if(operatorDisplay === 'x'){
                display = multiply(firstNumber, result)
            } else if(operatorDisplay === '/'){
                display = divide(firstNumber, result)
            }
            firstNumber = parseFloat(display)
        } else {
            firstNumber = parseFloat(display)
        }
        operatorDisplay = element.textContent
        operator = true
    }   else if(element.classList.contains('dot')) {
        if(dotClicked){
            alert("you can't enter more than one dot")
        } else {
            dotClicked = true
            display += element.textContent
        }
    }   else if(element.classList.contains('equal')){
        operator = false
        dotClicked = false
        if(operatorDisplay === '+'){
            display = add(firstNumber, result)
        } else if (operatorDisplay === '-'){
            display = subtract(firstNumber, result)
        } else if(operatorDisplay === 'x'){
            display = multiply(firstNumber, result)
        } else if(operatorDisplay === '/'){
            display = divide(firstNumber, result)
        }
        firstNumber = parseFloat(display)
    } 
        resultElement.value = display
}