

function filterPares (arr){
    return arr.filter(
        function(item){
            if(item % 2 !== 0){
                return item
            }
        }
    )
}

const nums = [1,23,55,67,30,2,4]

console.log('Os itens divisiveis por 2 são', filterPares(nums))