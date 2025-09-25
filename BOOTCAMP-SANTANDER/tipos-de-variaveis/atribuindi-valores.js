//Solução 1
function verificarPalindromo(string){
    if(!string) return 'String inesxistente';

   
       return string.split("").reverse().join("") == string;
   
}

//Solução 2

function verificarPalindromo2(string){
    if(!string) return;

    for(let i = 0; i < string.length / 2; i++){

        if(string[i] !== string[string.length -1 - i ]){
            return false;
        }

    }

    return true;

}

console.log(verificarPalindromo2('oomoo'))


let vendo = 'abba'

/*console.log(vendo.length / 2)*/

for (let p = 0; p < vendo.length; p++){

    vendo[p]

    console.log(vendo[p])
}


