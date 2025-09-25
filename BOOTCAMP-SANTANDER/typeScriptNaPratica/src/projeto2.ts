enum Profissao {
    Professora, 
    Jogadora,
    Desenvolvedora
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}


const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 18,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 18,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matematica', 'Programação']
}

const roberta: Estudante = {
    nome: 'Roberta',
    idade: 18,
    materias: ['Matematica', 'Programação']
}
