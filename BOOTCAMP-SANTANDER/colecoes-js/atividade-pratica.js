//map

function getAdmins(map){
    
    let adms =[]

    for([key, value] of map){

        if(value === 'adm'){
            adms.push(key)
        }
    }

    return adms
}

const myMap = new Map()


myMap.set('Luiz' , 'adm')
myMap.set('Pedro' , 'adm')
myMap.set('Joao' , 'adm')
myMap.set('Vitor' , 'Logistica')
myMap.set('Lucas' , 'Papeleiro')
myMap.set('Roberto' , 'entregador')
myMap.set('Machado' , 'adm')

console.log(getAdmins(myMap))

//set