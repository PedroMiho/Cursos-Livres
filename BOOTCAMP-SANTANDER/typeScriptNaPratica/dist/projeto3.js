"use strict";
function somarValoresNumericos(numero1, numero2) {
    return numero1 + numero2;
}
function printarValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
function adicionarValoresNumericos(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
console.log(adicionarValoresNumericos(1, 3, aoQuadrado));
