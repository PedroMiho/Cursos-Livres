export function mostraIdade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`
}

const pessoa ={
    idade: 40,
    nome: 'Pedro',
}

console.log(mostraIdade(pessoa))