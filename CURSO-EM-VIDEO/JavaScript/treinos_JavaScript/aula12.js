var idade = 60

if (idade < 16){
    console.log(`O jovem tem ${idade} anos, então ele não pode votar`)
} 
else if (idade >= 16 && idade < 18 || idade >= 65) { 
    console.log(`O jovem tem ${idade} anos, então ele tem a opção de voto`)  
}
else {
    console.log(`O jovem tem ${idade} anos, então ele é obrigado a votar`)  
    
}
