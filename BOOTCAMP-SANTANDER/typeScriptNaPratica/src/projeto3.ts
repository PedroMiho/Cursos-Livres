function somarValoresNumericos(numero1: number, numero2: number): number{
    return numero1 + numero2
}

function printarValoresNumericos(numero1: number, numero2: number): void{
    console.log(numero1 + numero2)
}

function adicionarValoresNumericos(numero1: number, numero2: number, callback: (numero: number) => number): number {

    let resultado = numero1 + numero2
    return callback(resultado)
}

function aoQuadrado(numero: number): number{
    return numero * numero
}

console.log(adicionarValoresNumericos(1,3,aoQuadrado))