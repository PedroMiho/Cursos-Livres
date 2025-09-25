interface Iusuario {
    id: string;
    email: string;
}

interface Iadmin  extends Iusuario{
    Cargo: 'gerente' | 'Coordenador' | 'supervisor';
}

function redirecione(usuario: Iusuario | Iadmin){
    
    if("cargo" in usuario){
        //Retorna Administrador
    }
        //Retorna Usuario
}