//EJERCICIO EDUCATIO
/*
alert ("BIENVENIDO A EDUCATIO");
alert ("INGRESA LOS SIGUIENTES DATOS ")

const clase={
   
   materia:prompt ("digite la materia "),
   tema:prompt ("digite el tema"),
   modalidad:prompt ("digite la modalidad"),
   precio:prompt ("digite el precio que pago por la clase"),
   fecha:prompt ("digite la fecha que tomo la clase"),
   horas:prompt ("digite el numero de horas")
    }


 
 console.log(estudiante);

 alert ("DATOS DEL DOCENTE");
 const docente={
   
    nombre:prompt ("digite su nombre "),
    apellido:prompt ("digite su apellido"),
    telefono:prompt ("digite su telefono"),
   profesion:prompt ("digite la profesion"),
    ciudad:prompt ("En que ciudad repartio  la clase")
     }
     console.log(docente);

    // const mostrar= Object.assign(" \tclase #1",clase,"\tfue tomada por el estudiante", estudiante, "\ty repartida por el docente", docente);
  
    const precioClase = clase.precio * clase.horas;

    console.log(`El precio de la clase es de ${precioClase} pesos`);
//console.log(mostrar)
console.log (`"la materia solicitada,${clase.materia}`);
console.log (`Por el estudiante,${estudiante.nombre,estudiante.apellido}`);
console.log (`en la fecha,${clase.fecha}`);
console.log(`El precio de la clase es de ${precioClase} pesos`);
console.log (`y fue dictada por el docente,${docente.nombre,docente.apellido}`);


*/

//REACT 26/07
//DESTRUCTURING OBJETOS

// const aprendiz ={
//    Nombre: "Manuel",
//    Apellido: "solarte",
//    direccion: "Calle 51N#5-30",
//    Numero: "3145784663"
// }

// const ReactA = ({Nombre , Apellido , direccion})=> {
//  console.table(Nombre );
//  console.table(Apellido );
//  console.table(direccion);
// }
// ReactA(aprendiz)

 

// const Materias ={
//    nombre: "Manuel",
//    profesor: "Educacion Fisica",
//    intensidad: "6 HORAS",
//    detalles:{
//       horario:"Lunes a Viernes de 9am - 1pm ",
//       dias_semana:'Martes y Jueves',
//       duracion: 'Semestral'
//    }}

// const ReactM = ({nombre , profesor , intensidad})=> {
//    console.table(nombre );
//    console.table(profesor );
//    console.table(intensidad);
  
 
//   }
//   ReactM(Materias)



//DESTRUCTURING ARRAYS




//COMO DESTRUCTURAR UN ARRAY EN REACT
// const ReturnArreglo = () =>{
//   return [5,7,"Hola"];
// }
// const [pos1, pos2, pos3]= ReturnArreglo();  
// console.log(pos2);




// const useS=(nombre)=>{
//    return [nombre, ()=>{console.log("EL USUARIO ESTA ACTIVO")}];

// }

// const [nombre,arrowfunction] = useS("Manuel Solarte");
// console.log(nombre);
// useS();



//EVENTOS

// const nav = document.querySelector(".text1");

// nav.addEventListener("mouseover",() => {
//    console.log("estas dando click")
// })

// nav.addEventListener("mouseout",() => {
//    console.log("UUUY")
// })




// Hacer una autenticacion de inicio de sesion y se necesita un formulario que tenga (email y contraseña minimo 8 caracteres)tiene que tener validacion en el correo (correo invalido) y validacion a la contraseña 


// hazme un formulario con email y contraseña que valide que la contraseña tenga minimo 8 caracteres y que el email lleve arroba sino aparezca un alert para cada uno diciendo que no es valido



   const email = document.getElementById("email");
   const contrasena = document.getElementById("contrasena");
   const formulario = document.querySelector("#formulario");
   const body = document.getElementById("cuerpo");

   


formulario.addEventListener('submit', (event)=>{
   event.preventDefault();
   

   body.style.backgroundColor="pink"

   if (email.value==="manuel123@gmail.com" && contrasena.value === "12345678"){
      alert ("Bienvenido manuel!")
      body.style.backgroundColor="red"
   }
      else if (email.value === "solarte@gmail.com"  && contrasena.value === "manuel123" ){
         alert ("Hola solarte!")
         body.style.backgroundColor="blue"
      }
console.log(email)
})







// const CorrectoE = document.querySelector("#email");

// CorrectoE.addEventListener("mouseover",() => {
//    console.log("estas dando click")
// })



// document.addEventListener("Domcontentloaded", function() {
//    const formul 