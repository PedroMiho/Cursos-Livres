//Tecnica Spread

function sum(x, y, z){
    return x+y+z
}

const numbers = [1,2,3]

console.log(sum(...numbers))

console.log(...numbers)

//Tecnica Rest

function confereTamanho(...args){
    console.log(args.length)
}

confereTamanho(1,2,3,5)

//Object Destructuring

const user = {
    id: 42,
    displayName: 'Jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
}

function userId ({fullName}){
    return fullName
}

console.log(userId(user))