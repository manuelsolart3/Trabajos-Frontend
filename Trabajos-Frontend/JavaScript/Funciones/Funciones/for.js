

//COMO REPETIR 
/*
let usuarios = ["Manuel123" , "solarte123" , "valenuela123" , "alejandro123"];

function U (us) {
console.log (`hola ${us}`)
}
for (let i=0; i < usuarios.length; i++ ){
U(usuarios[i]);
}
*/

// FOR OF
/*
for (var usuario of usuarios ){
U(usuario);
}

*/






//FOR
// SALUDANDO USUARIOS
/*
let  usuarios = ["Manuel123" , "solarte123" , "valenuela123" , "alejandro123"];
function cualquiera (no_hace_nada) {
    console.log (`hola ${no_hace_nada}`);
}

for  ( i=0; i < usuarios.length; i++ ){
cualquiera(usuarios[i]);
}
*/

 /*
for (i=0;i < 5 ; i++){
    let pedir = prompt("escribe tu nombre");
    console.log(pedir)
}
*/

/*

for (let i = 0; i < 3; i++) {
    let repetir = prompt("Escribe tu nombre");
    console.log(repetir);
  }
 
*/

// FOR OF
/*
 for (let nombre_for of usuarios ){
    U(nombre_for);
 }
 */

 /*
 const arr = [1, 2, 3, 4, 5];

 for (const primer_for of arr) {
   console.log(primer_for);
 }
 */





 
//EJEMPLO 4
/*
const promp= prompt ("escribe un numero")

if (promp%promp !== 0){
  console.log("NO ES VALIDO TU DIGITO")}

  
for (let z = 0; z < promp.length; z++ ){

  if 
  (promp[z] = promp % 5 == 0 && promp % 3 == 0 ){
    console.log("PING PONG")
  }



else if
  (promp[z] = promp % 3 == 0){
    console.log("PING")
  }
  

  else if 
  (promp[z] = promp % 5 == 0){
    console.log("PONG")
  }
  */



  //EJEMPLO RECORRE ARRAY CON FOR
/*
const profesores =[
  {nombre: "Manuel" ,materia:"Ingles" },
  {nombre: "Alejandro",  materia:"Ciencias" },
  {nombre: "Solarte " ,  materia:"fILOSOFIA"} ,
  {nombre: "Daniel"  , materia:"Matematicas" },
  {nombre: "Luis"  , materia:"Desarrollo"} ,
  {nombre: "Gerardo"  , materia:"Sociales" },
  {nombre: "Horacio",  materia:"Biologia" },
  {nombre: "Julian" ,  materia:"Geometria" },
  {nombre: "David" ,  materia:"Matematicas" },
  {nombre: "Jhonatan" ,  materia:"ingles "},
  {nombre: "Camilo"  , materia:"fisica" },
  {nombre: "Sara"  , materia:"quimica" },
  {nombre: "Ruben"   , materia:"quimica "},
  
]
let z;
for (z = 0; z <profesores.length; z++){
  console.table(profesores[z])
}
*/