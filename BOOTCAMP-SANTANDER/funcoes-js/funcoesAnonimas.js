/*const SOMA = function (a, b) {
    return a+b;
}

console.log(SOMA(6,3))
*/


const calc = function(operacao, num1, num2){
    return operacao(num1, num2)
}

const soma = function(num1,num2){
    return num1 + num2
}

const sub = function(num1,num2){
    return num1 - num2
}

const div = function(num1,num2){
    return num1/num2
}

const resultSub = calc(sub, 2, 2)
const resultDiv = calc(div, 10, 2)

console.log(calc(soma, 1, 2))
console.log(resultSub)
console.log(resultDiv)

