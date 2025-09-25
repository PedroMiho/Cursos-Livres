//Valores Padrão

function exponencial(array, num = 1){
    const result = [];

    for(let i = 0; i < array.length; i++){
        result.push(array[i] ** num)
    }

    return result
}

console.log(exponencial([1, 2, 3, 4, 5, 6, 7], 4 ))


//Arguments

function findMax(){
    let max = -Infinity

    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i]
        }
    }

    console.log(findMax.arguments.length)
    
    return max
}

console.log(findMax(1,2,3,40,5))


function pedro (){
    let max = -Infinity

    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i]
        }
    }
  
    return max
}


console.log(pedro(1,3,5,5))



