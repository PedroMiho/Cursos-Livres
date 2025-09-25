//metodo call

const pessoa = {
    nome: 'Miguel',
}

const animal = {
    nome: 'Max',
}

function getSoma (){
    console.log(this.nome)
}

getSoma.call(pessoa)

//metodo call

const myObj = {
    num1: 2,
    num2: 4,
}

function soma (a,b = 1){
    console.log(this.num1 + this.num1 + a + b)
}

soma.call(myObj, 5)

//usando o metodo apply

const myObj1 = {
    num1: 2,
    num2: 4,
}

function soma (a, b){
    console.log(this.num1 + this.num1 + a + b)
}

soma.apply(myObj1, [1, 6])

//Usando o metodo Bind

const retornaNomes = function(){
    return this.nome
}

let bruno = retornaNomes.bind({nome: 'pp', idade: '18'})

console.log(bruno())