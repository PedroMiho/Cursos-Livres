interface IAnimal {
    nome: String;
    tipo: 'Terrestre' | 'aquatico' ;
    //executarRudigo(alturaEmDecibeis: number): void
    domestico: boolean;
}

interface Ifelinos extends IAnimal{
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    Porte: 'Pequeno' | 'Medio' | 'Grande'
} 
/*
const animal: IAnimal = {
    nome: 'Elefante',
    tipo: "Terrestre",
    executarRudigo: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}


const felino: Ifelinos = {
    nome: 'Elefante',
    tipo: "Terrestre",
    visaoNoturna: true,
    executarRudigo: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}
*/

type IDomesico = Ifelinos | ICanino; 

const animal: IDomesico = {
    nome: 'Cachorro',
    Porte: 'Pequeno',
    domestico: true,
    tipo: 'Terrestre',   
    visaoNoturna: true,
} 


