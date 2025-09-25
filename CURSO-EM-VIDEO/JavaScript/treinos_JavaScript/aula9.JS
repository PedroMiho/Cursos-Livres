//Operadores Relacionais

var maior = 5 > 8
var menor = 7 < 4
var maiorouIgual = 5 >= 8
var menorouIgual = 8 <= 10 
var igual = 5 == 5
var diferente = 5 !=0
var identico = 5 === '5'

console.log
(`O maior sera ${maior}
o menor sera ${menor}    
O maior ou igual será ${maiorouIgual}
O menor ou igual será ${menorouIgual}
o igual a será ${igual}
O diferente ${diferente}
O identico será ${identico}
O maior ou igual é igual ao maior ${maiorouIgual == maior}`)

//Operadores Ternario 

var media = 5.5

console.log(media < 7 ? ++media :'reprovado')




