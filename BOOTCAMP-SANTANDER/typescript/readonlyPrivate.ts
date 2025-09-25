interface cachorro{
    nome: string;
    idade: number;
    parqueFavorito?: string

}

type cachorroSomenteLeitur= {
    readonly [k in keyof cachorro]-?: cachorro[k]
}

class MeuCachorro implements cachorroSomenteLeitur {
    nome;
    idade;
    parqueFavorito;

    constructor(nome, idade){
        this.idade = idade;
        this.nome = nome;

    }
}

const cao = new MeuCachorro('Apolo', 14) 

