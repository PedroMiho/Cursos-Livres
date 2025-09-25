"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Jogadora"] = 1] = "Jogadora";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 18,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: 'Jessica',
    idade: 18,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matematica', 'Programação']
};
const roberta = {
    nome: 'Roberta',
    idade: 18,
    materias: ['Matematica', 'Programação']
};
