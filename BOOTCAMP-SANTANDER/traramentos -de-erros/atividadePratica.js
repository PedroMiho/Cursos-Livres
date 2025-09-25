
function validarArray (arr, numElement){
    try{
        if (!arr && !num) throw new ReferenceError('Envie os parametros');

        if (typeof arr !== 'object') throw new TypeError ('Array precisa ser do tipo Object')

        for(let i = 0; i < arr.length;i++ ){
            if(typeof arr[i] !== 'number'){
                throw new TypeError ('Isso não é um numero')
            }        
        }
    
        if (arr.length !== numElement) {
            throw RangeError('Tamanho invalido')
        }   
        
        return arr
    }

    catch(e){

        if(e instanceof ReferenceError){
            console.log('Este erro é um ReferenceError')
            console.log(e.message)
        }

        else if(e instanceof TypeError){
            console.log('Este erro é um TypeError')
            console.log(e.message)
        }

        else if (e instanceof RangeError){
            console.log('Este erro é um RangeError')
            console.log(e.message)
        }
        else{
            console.log('Tipo de erro não esperado', e)
        }
    }
}

const numeros = []


console.log(validarArray(numeros, 5))