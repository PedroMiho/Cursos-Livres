let anyNovamente: any
let unkonowValor: unknown

unkonowValor = 1;
unkonowValor = 'strin'
unkonowValor = true

let stringTest2: string = 'agora vai'

if(typeof unkonowValor === 'string'){
    stringTest2 = unkonowValor
}

function error1(erro: string, codigo: number){
    throw(erro + codigo)
}

error1('Error', 404)