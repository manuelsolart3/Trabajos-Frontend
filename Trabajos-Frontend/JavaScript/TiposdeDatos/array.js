//EJ ARRAY
/* 
const  libros = [ "la odisea" , "principito" , "Quijote" , "La Biblia"];
console.log (libros);
console.table (libros);
*/



// 2DO EJ ARRAY
/* 
const meses = new Array( 'Enero' , 'Febrero' , 'Marzo' , 'Abril');
console.log (meses);
console.table (meses);
*/



//EJEMPLO 
/*
const datos = [ 'ADSO ' , 2556678 , null , true, {nombre:'manuel', apellidos: 'Solarte', edad: '20 años'}  ];
console.log (datos);
console.table (datos);
*/



//ACCEDER A VALORES ARRAY
//console.log(datos[0] , datos[ 1]);




//COMO  HACER UN CICLO PARA MOSTRAR TODO LO DE UN ARRAY
/*
const aprendices = ["luis", "daniel", "danilo" , " brayan"];

for(let z=0; z < aprendices.length; z++ ){
    console.log(aprendices[z]);
};
*/



//COMO AÑADIR ELEMENTOS A UN ARRAY 
/*
const  libros = [ "la odisea" , "principito" , "Quijote" , "La Biblia"];
console.log(libros);
console.table(libros);



AÑADO 2 CON PUSH= SE AGREGAN AL FINAL
libros.push("libro4", "100 años de soledad");
console.log(libros);
console.table(libros);
*/


//COMO AGREGAR AL PRINCIPIO
/* 
libros.unshift("lirbo3");
console.log(l    
*/

/*
const profesores = 
[{nombre:prompt("Escribe tu nombre"),asignatura: prompt("Escribe tu asignatura"), materia:prompt("Escribe la materia que dictas")},
{nombre:prompt("Escribe tu nombre") , asignatura:prompt("Escribe tu asignatura"), materia:prompt("Escribe la materia que dictas")},
{nombre:prompt("Escribe tu nombre") , asignatura:prompt("Escribe tu asignatura"), materia:prompt("Escribe la materia que dictas")}];


console.log(profesores);
console.table(profesores);
*/


//EJEMPLO  DE ARRAY VACIO QUE CAMBIE LA POSISCIÓN DE LOS OBJETOS
/*
const profesores =  [];

const profesor1 = {
    nombre:prompt("Escribe tu nombre"),
    asignatura:prompt("Escribe tu asignatura"),
    materia:prompt("Escribe la materia que dictas")
};
const profesor2 = {
    nombre:prompt("Escribe tu nombre"),
    asignatura:prompt("Escribe tu asignatura"),
    materia:prompt("Escribe la materia que dictas")
};
const profesor3 = {
    nombre:prompt("Escribe tu nombre"),
    asignatura:prompt("Escribe tu asignatura"),
    materia:prompt("Escribe la materia que dictas")
};
 
profesores.unshift(profesor3);
profesores.push(profesor2);
profesores.push(profesor1);
console.log(profesores);
console.table(profesores);
*/



//EJEMPLO
/*
const aprendices = [];

const aprendiz1 = {
    nombre:"Manuel",
    materia:"java",
    
};
const aprendiz2 = {
    nombre:"Alejandro",
    materia:"Ingles",
    
};
const aprendiz3 = {
    nombre:"Luis",
    materia:"Base de Datos",
    
};

aprendices.push(aprendiz1);
aprendices.push(aprendiz2);
aprendices.push(aprendiz3);
console.table(aprendices);
*/



//COMO ELIMINAR UN OBJETO DE UN ARRAY






//DESTRUCTURAR VALORES
/*
const semana=["lunes" , "martes" ,  "miercoles" , "jueves" , "viernes"];
const [D1,D2,D3,D4,D5 ]= semana;
console.log(D2);
*/

/*
const colores=["rojo" , "amarillo" , "azul" , "verde"];
const [C1,C2,C3,C4,]=colores;
console.log(C1);
*/
  

//EJEMPLO COMO CREAR UN CICLO QUE PIDA UN MISMO OBJETO
/*
const aprendices = [];


for (let z = 0; z < 5; z++) {
    

const aprendiz = {
    nombre:prompt("Escribe tu nombre"),
    apellido:prompt("Escribe tu apellid"),
    edad:prompt("Escribe tu edad"),
    sexo:prompt("Escribe tu sexo"),
    asignatura:prompt("Escribe tu asignatura")
};
aprendices.push(aprendiz);
}
console.log(aprendices);
console.table(aprendices);
*/
 


 

 
 
 

// METODOS   DE RECORRIDO
/*
let articulos = [
  {nombre: "bicicleta" , costo:3000},
  {nombre: "television" , costo:2500},
  {nombre: "libro" , costo:320},  
  {nombre: "celular" ,costo:10000},
  {nombre: "laptop" ,costo:15000},
  {nombre: "laptop" ,costo:15000},
  {nombre: "audifonos" ,costo:1700},
]
*/




//COMO AGREGAR 
/*
function add (){
  articulos.push({nombre: "COMPUTADORA" , costo: 2000  });
  articulos.push({nombre: "IPHONE" });
  articulos.push({nombre: "SAMSUNG" });
  console.log (articulos)
};
*/



//FILTRADO, dandole una funcion que restringa y filtre lo que necesito
/*
let articuloFiltrado = articulos.filter(function(articulo){
return articulo.costo <= 5000
});
*/



// METODO Map 
/*
let sacarCosto = articulos.map(function(valor){
  return valor.costo
})
*/



//METODO FIND
/*
let encuentraA = articulos.find (function(articulo){
  return articulo.nombre === "laptop"
});
*/



//METODO SOME || TRUE O FALSE
/*
let ArtBaratos = articulos.some(function(articulo){
return articulo.costo <= 700
})
*/



//METODO FOR EACH | ESTE LLAMA AL MISMO ARRAY
/*
articulos.forEach(function(articulo){
  console.log (articulo.nombre)
});
*/

      


























