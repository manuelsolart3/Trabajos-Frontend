//FUNCION   DECLARATIVA
/*
 function saludarE (estudiante,apellido,ciudad){
    console.log (`hola ${estudiante} ${apellido} te encuentras en ${ciudad}`)
}
saludarE (prompt("Escriba Su Nombre"),(prompt("Escriba Su apellido")),(prompt("que ciudad te encuentras")) )
*/

//FUNCION EXPRESIVA DENTRO DE UNA VARIABLE

/*  let funcion1 = function(a,b){
    return a + b ;
}
    funcion1();
*/


//EJ DECLARATIVA

/*
function multiplicar (a,b) { //defino la funcion multiplicar
    console.log(a*b);
}
multiplicar(5,10);   //realizo el llamado de la funcion 
*/



//EJ EXPRESIVA
/*
 const multiplicar1 = function (){ //Creo una variable y lo mismo
    console.log(10*5);
 }
multiplicar1();


function aprendices (){

}
*/




//EJ COMO RETORNAR 
/* function suma (a,b) {
    var resultado = a + b;
    return resultado;
}
*/



//COERCION EXPLICITA
// COMO CAMBIAR A STRING
//string(a);
// COMO CAMBIAR A NUMBER
//Number(a);





//FUNCION CONSTRUCTORA 
//HACER UNA LISTA AUTOMATICA DE 30 CARROS
/*
alert ("BIENVENIDO A TU CARRO");

 function  auto (marca, placa, color, modelo) {
this.marca=marca;
this.placa=placa;
this.color=color;
this.modelo=modelo;
 };
 for (i=0; i < 3; i++) {
    let marca = prompt ("Ingresa la marca de tu carro");
    let placa = prompt ("Ingresa la placa de tu carro");
    let color = prompt ("Ingresa el color de tu carro");
    let modelo = prompt ("Ingresa el modelo de tu carro");
    let autos =  new auto(marca, placa, color, modelo);
    console.log (autos);
 }
*/




 //PEDIR UN OBJETO Y SINO TIENE LICENCIA QUE SALGA FALSO
 /*
let car ={
    marca: "toyota",
    modelo: "land cruiser",
    // drivingLicense: "seria true"
};
car = solution(car);
console.log(car);
  function solution(car) {
// !car... es para decir sino exite
// o podemos  utilizar car.drivingLicense == null o undefined
    if (!car.LicensePlate ) {
      car.drivingLicense = false;
    }
  
    else {
      car.drivingLicense = true;
    }
    return car;
  }
  
  */


//EJEMPLO FACTURA
/*
let total = 0 ;

 function agregra (precio){
return total+=(precio);
 }

 function iva (){
    return total*1.19 ;
 }

 total = agregra(1000)
 total = agregra(1000)
 total = agregra(1000)
   
 const Tpagar = iva(total);
 console.log(`TU subtotal es ${total}`);
 console.log (`Y  EL total a pagar es ${Tpagar}`)
*/


//FUNCIONES DENTRO DE UN OBJETO
/*
const peliculas ={
    drama: function(nombre){
        console.log(`USTED ESTA EN EL APARTADO DE PELICULAS DE DRAMA ${nombre}`);

    },
    accion: function(){
        console.log("USTED ESTA EN EL APARTADO DE PELICULAS DE ACCION");
    },
    comedia: function(){
        console.log("USTED ESTA EN EL APARTADO DE PELICULAS DE COMEDIA");
    }
}
    peliculas.drama("Y ESTA VIENDO SAW 2");
    peliculas.accion();
    peliculas.comedia();
    */




//EJEMPLO DE REPRODUCTOR   con Funcion-FLECHA
/*
const reproductor = {
    play:()=> console.log ("usted dio play"),
    stop:()=> console.log ("usted dio stop") ,
    pausa:()=> console.log ("usted dio pausa"),
    forward:(siguiente)=> console.log (`usted paso a la siguiente canción que se llama ${siguiente}`),
    reverse:(anterior)=> console.log (`se reproducira la anterior cancion ${anterior}`)
    
}

reproductor.play();
reproductor.stop();
reproductor.pausa();
reproductor.forward("sonido bestial");
reproductor.reverse("YO VOY FT zion & lenox");


*/

//FUNCION FLECHA
/*
const aprender = ()=> {
    console.log ("anbsnbdba")
}
aprender();

*/


/*
Crea una función llamada buscarEstudiante que reciba como parámetro un nombre de estudiante y un array de objetos estudiantes (cada objeto tiene propiedades como nombre, edad, materia). La función debe buscar el estudiante por nombre en el array y retornar el objeto completo del estudiante encontrado.
*/

/*
function buscarEstudiante(nombreEstudiante, arrayEstudiantes) {
  for (let i = 0; i < arrayEstudiantes.length; i++) {
    if (arrayEstudiantes[i].edad == nombreEstudiante) {
      return arrayEstudiantes[i];
    }
  }
  // Si no se encuentra al estudiante, se puede retornar null o un valor indicativo de no encontrado
  return "el estudiante no esta en la lista";
}


const estudiantes = [
  { nombre: "Luis", edad: 20, materia: "Matemáticas" },
  { nombre: "Ana", edad: 19, materia: "Historia" },
  { nombre: "Pedro", edad: 22, materia: "Física" }
];

const estudianteBuscado = buscarEstudiante("21", estudiantes);
console.log(estudianteBuscado);

*/








 


// const UActivo = (id, nombre)=>
// (
// {
// uid: id, 
// userN: nombre
// })

// const usuario = UActivo('Manuel Solarte');
// console.log(UActivo("manuel1234 ","perro con pero"));









