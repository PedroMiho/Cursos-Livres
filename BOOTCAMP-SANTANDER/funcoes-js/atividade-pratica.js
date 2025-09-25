//Desafio 1 

const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B'
    },
    
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B'
    },

    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C'
    },
    
    {
        nome: 'Pedro',
        nota: 3,
        turma: '2C'
    }
]

function alunosAprovados(arr){

    let aprovados = []

    for(let i = 0; i < arr.length; i++){

        const {nome, nota} = arr[i]

        if(nota >= 5){
            aprovados.push(nome)
        } 
    }

    return aprovados
}

console.log(alunosAprovados(alunos, 5))









//Desafio 2

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`
} 

const pessoa1 = {
    nome: 'Maria',
    idade: 30
}

const pessoa2 = {
    nome: 'Joao',
    idade: 18
}

const pessoa3 = {
    nome: 'Roberta',
    idade: 25
}

console.log(calculaIdade.call(pessoa1, 30))