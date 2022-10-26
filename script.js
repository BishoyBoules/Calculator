let result = 0
let display = ''
let secDisplay = ''
let operator = false
let firstNumber = 0
let operatorDisplay = ''
let dotClicked = false

function clear() {
  operator = false
  dotClicked = false
  display = ''
  secDisplay = ''
  result = 0
  firstNumber = 0
  operatorDisplay = ''
  resultElement.value = display
}

const add = (x, y) => x + y

const subtract = (x, y) => x - y

const multiply = (x, y) => x * y

const divide = (x, y) => {
  if (y === 0) {
    clear()
    alert("you can't divide by zero")
    return ''
  }
  let theResult = x / y
  if (theResult % 1) {
    return parseFloat(theResult.toFixed(3))
  } else {
    return theResult
  }
}

const clearElement = document.getElementById('clear')
const resultElement = document.getElementById('result')

resultElement.value = display
const buttons = document.getElementsByTagName('button')
clearElement.addEventListener('click', clear)

resultElement.value = display

const operate = (element) => {
  if (element.classList.contains('number')) {
    if (operator) {
      if(display){
        firstNumber = display
      }
      display = ''
      secDisplay += element.textContent
      result = parseFloat(secDisplay)
      resultElement.value = secDisplay
    } else {
      display += element.textContent
      firstNumber = parseFloat(display)
      resultElement.value = display
    }
  } else if (element.classList.contains('operator')) {
    dotClicked = false
    display = ''
    secDisplay = ''
    operator = true
    if(result){
      switch (operatorDisplay) {
        case '+':
          display = add(firstNumber, result)
          break
        case '-':
          display = subtract(firstNumber, result)
          break
        case 'x':
          display = multiply(firstNumber, result)
          break
        case '/':
          display = divide(firstNumber, result)
          break
      }
      resultElement.value = display
    }
    operatorDisplay = element.textContent
  } else if (element.classList.contains('dot')) {
    if (dotClicked) {
      alert("you can't enter more than one dot")
    } else {
      dotClicked = true
      if(operator){
        secDisplay +=  element.textContent
        resultElement.value = secDisplay
      } else {
        display += element.textContent
        resultElement.value = display
      }
    }
  } else if (element.classList.contains('equal')) {
    operator = false
    dotClicked = false
    switch (operatorDisplay) {
      case '+':
        display = add(firstNumber, result)
        break
      case '-':
        display = subtract(firstNumber, result)
        break
      case 'x':
        display = multiply(firstNumber, result)
        break
      case '/':
        display = divide(firstNumber, result)
        break
    }
    firstNumber = display
    resultElement.value = display.toFixed(3)
  } else if (element.classList.contains('pcg')) {
    display = firstNumber / 100
    firstNumber = parseFloat(display)
    resultElement.value = display
    operator = true
  } else if (element.classList.contains('sign')) {
    display = firstNumber * -1
    firstNumber = parseFloat(display)
    resultElement.value = display
    operator = true
  }
}
