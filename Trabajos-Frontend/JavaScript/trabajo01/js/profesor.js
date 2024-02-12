const tdocumen = document.getElementById('tdocumen').value;
const user = document.getElementById('user').value;
const pass = document.getElementById('pass').value;
const roles = document.getElementById('roles').value;


function inicio (tdocumen, user, pass, roles){
    switch(roles){
        
        case 'Docente':
            Estudiante();
        break;
        case 'Administrador':
            Estudiante();
        break;

        default:
        break;
    }
}


