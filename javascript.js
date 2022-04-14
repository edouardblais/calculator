const operandButton = document.getElementsByClassName('operand');
const operatorButton = document.getElementsByClassName('operator');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const decimalButton = document.getElementById('decimal');
const equalButton = document.getElementById('equal');
const screenButton = document.getElementById('screen');

let firstOperand = '';
let secondOperand = '';
let operator = '';

let add = (a, b) => a+b;

let substract = (a, b) => a-b;

let multiply = (a, b) => a*b;

let divide = (a, b) => a/b;

for (let i=0; i<operandButton.length; i++) {
    operandButton[i].addEventListener('click', () => append(operandButton[i].textContent));
};

for (let i=0; i<operatorButton.length; i++) {
    operatorButton[i].addEventListener('click', () => evaluate(operatorButton[i].textContent));
};

clearButton.addEventListener('click', () => {
    resetScreen();
    firstOperand='';
    secondOperand='';
    operator=''
});

deleteButton.addEventListener('click', () => {
    let oldText = screenButton.textContent;
    let newText = oldText.slice(0, -1);
    screenButton.textContent = newText;
});

function evaluate(x) {
    if (firstOperand==='') {
        firstOperand = screenButton.textContent;
        operator = x;
        resetScreen();
        return;
        };
    secondOperand = screenButton.textContent;
    if (operator==='/' && secondOperand==='0') {
        screenButton.textContent='Error:Division by 0';
        return;
    };
    let result = operate(parseInt(firstOperand), parseInt(secondOperand), operator);
    firstOperand = result;
    if (x==='=') {
        screenButton.textContent = (Math.round(firstOperand*100))/100;
        return;
        };
    operator = x;
    resetScreen();
    return;
};

function operate(a, b, operator) {
    if (operator==='+') {
        return add(a,b);
    }  else if (operator==='-') {
        return substract(a, b);
    } else if (operator==='*') {
        return multiply(a, b);
    } else if (operator==='/') {
        return divide(a, b);
    };
};

function append(choice) {
    screenButton.textContent += choice;
};

function resetScreen() {
    screenButton.textContent = '';
};
