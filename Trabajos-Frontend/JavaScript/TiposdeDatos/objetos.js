

// PARA CREAR UN OBJETO
/*const moteros={
    nombre: "yecid",
    apellido:"Pardo",
    correo:"yecidpardo@gmail.com",
    celular: 314578123,
    identificacion: "1002965439" ,
    motocicleta: {
        placa:"JHQ-452",
        modelo: "2019", 
        marca:"YAMAHA", 
        color:"BLANCO"
    }
}
console.log(moteros);
*/



//COMO INGRESAR UNA VARIABLE A UN OBJETO
//moteros.moto = "SUSUKI";



// COMO ACCEDER A UN DATO EN ESPECIFICO
/*console.log(moteros.celular);
console.log(moteros.apellido);
console.log(moteros.moto);*/



//COMO ELIMINAR UNA VARIABLE
//delete moteros.alias;



//COMO ACCEDER A LOS VALORES Y ASIGNARLOS 
/*const {celular,nombre,apellido}=moteros;

console.log(celular);
console.log(nombre);
console.log(apellido);*/



//COMO ANIDAR 
/*const {nombre,celular,motocicleta:{placa}}= moteros;
console.log (nombre);
console.log (celular);
console.log (placa);
*/


/// COMO CONGELAR ALGO PARA QUE ABSOLUTAMENTE NADA SEA MODIFICABLE
// Object.freeze(moteros);
/// COMO SELLAR ALGO DONDE SE PUEDE MODIFICAR LOS VALORES
///Object.seal(moteros);


///COMO UNIR 2 OBJETOS
/*const motero1= Object.assign(moteros,el_otro_objeto);
console.log(motero1);*/

///SEGUNDA OPCION
/*const moteros2 {...moteros, ...el_otro_objeto}
console.log(moteros2);*/



//OBJETO CONSTRUCTOR
/*
var edad = prompt("Ingrese su edad:");
var mensaje = (edad >= 18) ? "Eres mayor de 18 años." : "Eres menor de 18 años.";
console.log(mensaje);
*/































