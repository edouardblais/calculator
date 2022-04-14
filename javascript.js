const operandButton = document.getElementsByClassName('operand');
const operatorButton = document.getElementsByClassName('operator');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const decimalButton = document.getElementById('decimal');
const equalButton = document.getElementById('equal');
const screenButton = document.getElementById('screen');

let add = (a, b) => a+b;

let substract = (a, b) => a-b;

let multiply = (a, b) => a*b;

let divide = (a, b) => a/b;

for (let i=0; i<operandButton.length; i++) {
    operandButton[i].addEventListener('click', () => append(operandButton[i].textContent));
};


function operate(a, b, operator) {
    if (operator==='+') {
        return add(a,b);
} else if (operator==='-') {
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
}
