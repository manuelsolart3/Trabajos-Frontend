// //VALIDACION DE INICIO DE SESION
 //let usuario = document.getElementById("inicioDocumento");
// let password = document.getElementById("inicioContraseña");
// let entrada = "adso255678";
// let salida = "adso2023";

// let boton = document.getElementById("enviarInicio");
// boton.addEventListener("click", () => {
 
//   if (usuario.value === entrada && password.value === salida) { 
//     alert("Bienvenido");
//    window.location.href = "index.html"
//   } else {
//     alert("Correo electrónico o contraseña incorrectos");
//   }
// });
let email = document.getElementById("email");
let password = document.getElementById("password");


let boton = document.getElementById("boton")

boton.addEventListener("click",()=> {
    // Verificar las credenciales ingresadas
    if (email.value === "docente123" && password.value === "adso2023") {
       alert("Bienvenido docente")
       miModal.style.display = "none";
       const a=document.querySelector('.d-block')
       a.textContent="Trabaja con nosotros en la modalidad que tu desees";
    } else if(email.value === "" && password.value === ""){
      alert("Tienes espacios en blanco");
    }
    else if(email.value==="estudiante123" && password.value === "12345"){
    alert("bienvenido estudiante")}
});


  //JAVA
//VALIDACION ROLES

let tdocumen = document.getElementById('tdocumen').value;
let user = document.getElementById('user').value;
let pass = document.getElementById('pass').value;
let roles = document.getElementById('roles').value;
let docente = document.getElementById('Docente').value;


function inicio (tdocumen, user, pass, roles){
    switch(true){
        
        case 'Docente':
          const a=document.querySelector('.d-block')
          a.textContent="Trabaja con nosotros en la modalidad que tu desees";
          const x=document.querySelector('.d-block2')
          x.textContent="puedes contraofertar las solicitudes de los usuarios";
          const y=document.querySelector('.d-block3')
          y.textContent="Genera ingresos con nuestra app";
          const n=document.querySelector('.title1')
          n.textContent="Puedes calificar el comportamiento de los usuarios en las clase";
          const t=document.querySelector('.text1')
          t.textContent="tanto el docente como el usuario que solicitara la clase al finalizar tendra que calificar";
          const tit=document.querySelector('.title3');
          tit.textContent="Contraoferta las solicitudes de los usuarios";
          const text=document.querySelector('.text3');
          text.textContent="ofertale al usuario un valor que te parezca mas adecuado para ti o una hora diferente en la que estes disponible";
          const j=document.querySelector('.title2');
          j.textContent="Gana ingresos adicionales con nuestra App";
          const m=document.querySelector('.text2');
          m.textContent="con educatio ganaras ingresos adicionales con los servicios que tomes en el mes";
          const b=document.querySelector('.big');
          b.textContent="Descarga nuestra aplicacion mobil recuerda que para postularte a una clase ya sea presencial o virtual tienes que iniciar sesion y registrarte como docente y postularse para  la clase mediante nuestra App mobil, nuestro sitio web te permitira conocer mas sobre nosotros y ver informacion de tu cuenta y de los servicios que haz tomado";
          const man=document.querySelector('.heading-5-font-weight-normal');
          man.textContent="Postulate a las solicitudes de clases con confianza";
      
            
        break;
        default:
        case 'Administrador':
          const e=document.querySelector('.d-block')
          e.textContent="Bienvenido Administrador";
          const l=document.querySelector('.d-block2')
          l.textContent="puedes hacer las verificaciones pertinentes";
          const p=document.querySelector('.d-block3')
          p.textContent="puedes observar las solicitudes, quejas y comentarios";
          const s=document.querySelector('.title1')
          s.textContent="recuerda los datos que tiene que introducir el docente antes de ser verificado";
          const q=document.querySelector('.text1')
          q.textContent="tiene que introdurcir su hoja de vida y una foto en tiempo real";
          const tit1=document.querySelector('.title3');
          tit1.textContent="las quejas solicitudes y reclamos las podras ver en la parte de abajo";
          const text1=document.querySelector('.text3');
          text1.textContent="leelas y informa los problemas existentes en la App";
          const j1=document.querySelector('.title2');
          j1.textContent="Mantengamos la App en constante mantenimiento";
          const m1=document.querySelector('.text2');
          m1.textContent="Asi se hara una optimizacion de la App ";
          const b1=document.querySelector('.big');
          b1.textContent="Descarga nuestra aplicacion mobil recuerda que para postularte a una clase ya sea presencial o virtual tienes que iniciar sesion y registrarte como docente y postularse para  la clase mediante nuestra App mobil, nuestro sitio web te permitira conocer mas sobre nosotros y ver informacion de tu cuenta y de los servicios que haz tomado";
          const man1=document.querySelector('.heading-5-font-weight-normal');
          man1.textContent="Postulate a las solicitudes de clases con confianza";
      
      
       

    break; }}
