interface pessoa{
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface brasileiro extends Omit<pessoa, 'nacionalidade'>{

}

const Brasileiro: brasileiro = {
    
}