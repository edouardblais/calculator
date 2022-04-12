let add = (a, b) => a+b;

let substract = (a, b) => a-b;

let multiply = (a, b) => a*b;

let divide = (a, b) => a/b;

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
