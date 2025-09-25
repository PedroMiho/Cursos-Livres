var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()

var horaminutos = hora+(minutos/60) // SOMAMOS HORAS COM MINUTOS


console.log(`Agora são exatamente ${hora}h${minutos}`)  

if(horaminutos >= 6 && hora < 12){
    console.log(`Teremos uma mensagem de bom dia`)
} 
else if (horaminutos >= 12 && hora < 18){
    console.log(`Teremos uma mensagem de boa tarde`)  
}
else{
    console.log(`Teremos uma mensagem de boa noite`)  
}