//Função 1
function parimpar(n){
    if(n%2==0){
        return 'par'
    }
    else{
        return'impar'
    }
}
/*let res = parimpar(223)
console.log(res)
ou
*/
console.log(parimpar(3))

//Função2
function soma(n1 = 0, n2 = 0){
    return n1+n2
}
console.log(soma(7))


//função 3 - Declarando um function dentro de uma variavel
const v = function(x){
    return x*2
}

console.log(v(5))

//Função 4

function fatorial(n3){
    let fat = 1
    for(let c = n3; c>1; c--){
        fat*= c
    } 
    return fat
}

console.log(fatorial(5))

//Função 5

function fatorial1(n4){
    if(n4 == 1){
        return 1
    }
    else{
        return n4 * fatorial1(n4-1)
    }
}
console.log(fatorial1(10))
