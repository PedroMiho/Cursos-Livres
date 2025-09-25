"use strict";
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let button = document.getElementById('button');
function somarValores(input1, input2) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    else if (typeof input1 === 'string' || typeof input2 === 'number')
        return 'valores invalidos';
    else if (typeof input1 === 'number' || typeof input2 === 'string')
        return 'valores invalidos';
    else {
        return input1 + input2;
    }
}
if (button) {
    button.addEventListener('click', () => {
        console.log(somarValores(input1.value, input2.value));
    });
}
