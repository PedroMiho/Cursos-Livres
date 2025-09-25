let button1 = document.getElementById('button')
let input11 = document.getElementById('input1') as HTMLInputElement
let input21 = document.getElementById('input2') as HTMLInputElement


function somar(numero1: number, numero2: number, devPrintar: boolean){
    if(devPrintar){
        console.log(numero1 + numero2)
    }
    
    return numero1 + numero2
}
let devPrintar = true
let frase = 'O valor é'


if(button1) {
    button1.addEventListener('click', () => {
        if(input11 && input21){
            somar(Number(input11.value), Number(input21.value), devPrintar);
        }
    })
}
