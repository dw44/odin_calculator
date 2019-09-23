const DISPLAY = document.getElementById('main-display');
const CLEAR = document.getElementById('btn-clear');
const BACKSPACE = document.getElementById('btn-backspace');
const DIVIDE = document.getElementById('btn-divide');
const MULTIPLY = document.getElementById('btn-multiply');
const SUBTRACT = document.getElementById('btn-sub');
const ADD = document.getElementById('btn-add');
const POWER = document.getElementById('btn-power');
const ZERO = document.getElementById('btn-zero');
const ONE = document.getElementById('btn-one');
const TWO = document.getElementById('btn-two');
const THREE = document.getElementById('btn-three');
const FOUR = document.getElementById('btn-four');
const FIVE = document.getElementById('btn-five');
const SIX = document.getElementById('btn-six');
const SEVEN = document.getElementById('btn-seven');
const EIGHT = document.getElementById('btn-eight');
const NINE = document.getElementById('btn-nine');
const DECIMAL = document.getElementById('btn-decimal');
const EQUAL = document.getElementById('btn-equal');

const add = function(a, b) {
    return a + b;
} 
const subtract = function(a, b) {
    return a - b;
} 
const multiply = function(a, b) {
    return a * b;
} 
const divide = function(a, b) {
    return a / b;
} 
const power = function(a, b) {
    return a**b;
} 

const operate = function(operands, operator) {
    //Operands passed as array, operator is a function
    return operator(operands[0], operands[1]);
}

let operator = undefined;
let firstValue = undefined;
let secondValue = undefined;

CLEAR.addEventListener('click', () => {
    firstOperand = 0;
    secondOperand = 0;
    DISPLAY.textContent = '0';
});

ADD.addEventListener('click', () => {
    firstOperand = Number(DISPLAY.textContent);
    DISPLAY.textContent = '0';
    operator = add;
});

SUBTRACT.addEventListener('click', () => {
    firstOperand = Number(DISPLAY.textContent);
    DISPLAY.textContent = '0';
    operator = subtract;
});

MULTIPLY.addEventListener('click', () => {
    firstOperand = Number(DISPLAY.textContent);
    DISPLAY.textContent = '0';
    operator = multiply;
});

DIVIDE.addEventListener('click', () => {
    firstOperand = Number(DISPLAY.textContent);
    DISPLAY.textContent = '0';
    operator = divide;
});

POWER.addEventListener('click', () => {
    firstOperand = Number(DISPLAY.textContent);
    DISPLAY.textContent = '0';
    operator = power;
});

ZERO.addEventListener('click', () => {
    if (DISPLAY.textContent === '0') {}
    else if (DISPLAY.textContent.length === 12) {}
    else {
        DISPLAY.textContent += String('0');
    }
})
