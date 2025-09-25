/*
//Map que eu fiz
const mult = [1,2,3,4,5,6,7,8]

const result = mult.map((mult) => mult * 2) 

console.log(result)
*/


//Usando o This

const maca = {
    value: 2,
    
}

const orange = {
    value: 3,
}

function mapComThis(arr, thisArg){
    
    console.log(thisArg)
    
    return arr.map(
        function(item){
            return item * this.value
        }, 
        thisArg) //Metodo map com função e um this arg

}

const nums = [1,2,3,4]

console.log('This -> Maçã', mapComThis(nums, maca))

console.log('This -> Laranja', mapComThis(nums, orange))

/*
function mapSemThis(arr){
    return arr.map(function (item){
        return item * 2;
    })
}

const nums1 = [2,4,6,8]

console.log('Usando o map sem this ficaria da seguinte forma', mapSemThis(nums1))
*/

