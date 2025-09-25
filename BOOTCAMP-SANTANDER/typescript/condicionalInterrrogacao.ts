interface Iusuario{
    id: string;
    email: string;
    cargo?: 'Gerente' | 'Coordenador' | 'Funcionario';
}

function redirecione1 (usuario: Iusuario){
    if(usuario.cargo){
        //redirecionar (usuario.cargo)
    }

    // Redirecionar para a área do usuario
}