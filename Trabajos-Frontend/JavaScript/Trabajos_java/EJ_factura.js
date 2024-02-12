//EJERCICIO #1 FACTURA
/*
alert ("factura de tu compra");
let nombre= prompt ("digite su nombre");


let product1=
prompt (`digite su primer producto`)
let precio1=
prompt ("digite el precio");

let product2=
prompt ("digite su segundo producto");
let precio2=
prompt ("digite el precio");

let product3=
prompt ("digite su tercer producto");
let precio3=
prompt ("digite el precio");

let  product4=
prompt ("digite su cuarto producto");
let precio4=
prompt ("digite el precio");


const numfactura ="factura #1"

console.log (numfactura);
console.log (`${product1} \t${precio1}`);
console.log (`${product2} \t${precio2}`  );
console.log (`${product3} \t${precio3}`);
console.log (`${product4}  \t${precio4}`);

let subtotal=(
 Number.parseInt(precio1)
+Number.parseInt(precio2)
+Number.parseInt(precio3)
+Number.parseInt(precio4));

console.log ("SUBTOTAL=",subtotal);
 
let  descuento= subtotal*0.10;
console.log ("DESCUENTO= " , descuento);

let iva = descuento*0.9;
console.log ("IVA",iva);


let total= subtotal+iva-descuento;
console.log (`El Total a pagar por el señor `,nombre , "es " ,total);
*/



//EJERCICIO #2 NOTAS FINALES

/*
alert ("Notas finales de estudiantes");
alert ("aprendiz 1")
let nombre1= prompt ("digite su nombre");
let not11= Number.parseFloat (prompt ("Digite su primer nota "));
let not12= Number.parseFloat (prompt ("Digite su segunda nota "));
let not13= Number.parseFloat (prompt ("Digite su tercer nota "));
//////////////////////////////////////////////////////
alert ("aprendiz 2")
let nombre2= prompt ("digite su nombre");
let not21= Number.parseFloat (prompt ("Digite su primer nota "));
let not22= Number.parseFloat (prompt ("Digite su segunda nota "));
let not23= Number.parseFloat (prompt ("Digite su tercer nota "));
//////////////////////////////////////////////////////
alert ("aprendiz 3")
let nombre3= prompt ("digite su nombre");
let not31= Number.parseFloat (prompt ("Digite su primer nota "));
let not32= Number.parseFloat (prompt ("Digite su segunda nota "));
let not33= Number.parseFloat (prompt ("Digite su tercer nota "));
///////////////////////////////////////////////


//notas estudiante 1
let nota1_1=(not11*0.20);
let nota1_2=(not12*0.20);
let nota1_3=(not13*0.60);
let notafinal1=(nota1_1+nota1_2+nota1_3);
//notas estudiante 2
let nota2_1=(not21*0.20);
let nota2_2=(not22*0.20);
let nota2_3=(not23*0.60);
let notafinal2=(nota2_1+nota2_2+nota2_3);
//notas estudiante 3
let nota3_1=(not31*0.20);
let nota3_2=(not32*0.20);
let nota3_3=(not33*0.60);
let notafinal3=(nota3_1+nota3_2+nota3_3);





//Nota final 1
console.log (nombre1);
console.log (`${not11}`);
console.log (`${not12}`  );
console.log (`${not13}`);
console.log (`la nota final del estudiante ${nombre1}, es,${notafinal1}`);
if (notafinal1<3.0 )
{console.log (`el estudiante,${ nombre1},REPROBO `);}
else 
{console.log (`el estudiante,${ nombre1},APROBO `);}
  //Nota final 2
console.log (nombre2);
console.log (`${not21}`);
console.log (`${not22}`  );
console.log (`${not23}`);
console.log (`la nota final del estudiante ,${nombre2}, es, ${notafinal2}`);
if (notafinal2<3.0 )
{console.log (`el estudiante,${ nombre2},REPROBO `);}
else 
{console.log (`el estudiante,${ nombre2},APROBO `);}
//Nota final 3
console.log (nombre3);
console.log (`${not31}`);
console.log (`${not32}`  );
console.log (`${not33}`);
console.log (`la nota final del estudiante ,${nombre3}, es, ${notafinal3}` );
if (notafinal3<3.0 )
{console.log ("el estudiante", nombre3,"REPROBO");}
else  (notafinal3>3.0 );
{console.log ("el estudiante", nombre3,"APROBO");}

*/


//EJERCICIO #3 USO DE OBJETOS
/*
console.log(clase);
alert ("DATOS DEL ESTUDIANTE");
const estudiante={
   
    nombre:prompt ("digite su nombre "),
    apellido:prompt ("digite su apellido"),
    telefono:prompt ("digite su telefono"),
    metodo_pago:prompt ("digite el metodo de pago que utilizo para pagar la clase"),
    ciudad:prompt ("En que ciudad recibio la clase")
     }
*/



//EJERCICIO #4 USO DE ARRAYS

/* 
const  libros = [ "la odisea" , "principito" , "Quijote" , "La Biblia"];
console.log (libros);
console.table (libros);
*/


//EJERCICIO #5  ITERADORES   (PROYECTO)

//EJERCICIO #6  FUNCION   (SALUDO)

/*
 function saludarE (estudiante,apellido,ciudad){
    console.log (`hola ${estudiante} ${apellido} te encuentras en ${ciudad}`)
}
saludarE (prompt("Escriba Su Nombre"),(prompt("Escriba Su apellido")),(prompt("que ciudad te encuentras")) )
*/


//EJERCICIO #7  JUEGO PING-PONG  
/*
i=0;
let promp;
do{
   
    alert("escribe otro numero");
     promp= (prompt("escribe un numero"));
     i++;
    //cociente y residuo 
} while(promp/promp !== 0 && promp % 2 !==0 );


let z=0;

 do{console.log(`${z}`);
    if 
    (z % 5 == 0 && z % 3 == 0 ){
      console.log("PING PONG")
    }
  else if
    (z % 3 == 0){
      console.log("PING")
    }
    else if 
    (z  % 5 == 0){
      console.log("PONG")
    }
z++;
}while (z <= promp);

*/

//EJERCICIO #8  RETO 1 -> DIA-MES-ESTACION
/*
let numeros = (prompt("Ingresa un numero del 1 al 12"));

if (numeros >12){
  console.log("NO ES VALIDO TU DIGITO")}

  for (let z = 0; z < numeros.length; z++ ){

if (numeros == 2) {console.log ("el mes es febrero y tiene 28 dias y estos meses son invierno: Enero, febrero y marzo")}

else if  (numeros == 4 || numeros ==6 || numeros ==9 || numeros ==11){console.log ("el mes tiene 30 dias")}
else if  (numeros == 1 || numeros ==3 || numeros ==5 || numeros ==7 || numeros ==8 || numeros ==10 || numeros ==12){console.log ("el mes tiene 31 dias")}
  }
      
let estaciones= 
  {invierno: " ENero, febrero y marzo",
  verano: "  junio, julio y agosto",
  primavera: " abirl y mayo",
  otoño: "septiembre,octubre,noviembre y diciembre"}

 if (numeros == 1 ){
  console.log (`tu mes es enero ${estaciones.invierno}`)}

  
    else if (numeros == 3 ){
      console.log (`tu mes es marzo ${estaciones.invierno}`)}
    
      else if (numeros == 4){
        console.log (`tu mes es abril ${estaciones.invierno}`)}
      
        else if (numeros == 5 ){
          console.log (`tu mes es ${estaciones.invierno}`)}
        
          else if (numeros == 6){
            console.log (`tu mes es junio  ${estaciones.verano} `)}
          
            else if (numeros == 7 ){
              console.log (`tu mes es julio   ${estaciones.verano}`)}
            
              else if (numeros == 8 ){
                console.log (`tu mes es agosto  ${estaciones.verano}`)}
              
                else if (numeros == 9 ){
                  console.log( `tu mes es septiembre ${estaciones.otoño}`)}
                
                  else if (numeros == 10){
                    console.log (`tu mes es octubre ${estaciones.otoño}`)}

                    else if (numeros == 11 ){
                      console.log (`tu mes es noviembre  ${estaciones.otoño}`)}
                      else if (numeros == 12 ){
                        console.log (`tu mes es diciembre y es navida!!  ${estaciones.otoño}`)}
                  
                                                                                          
  */


 //31:41
   

 
//EJERCICIO #9  RETO 2 -> APUESTAS

/*
let numero_apuesta = (prompt("¿A qué número quieres apostar del 1 al 10?"));
let apuesta = (prompt("¿Cuánto quieres apostar?"));
let usuario = 5000;





while (usuario > 0 && usuario < 10000) {
  if (apuesta > usuario) {
    console.log("No puedes apostar más de lo que tienes.");
  break;
 }
 let cpu = Math.floor(Math.random() * 10) + 1;
  if (numero_apuesta !== cpu) {
    usuario -= apuesta;
    console.log(`Perdiste, tu saldo es de ${usuario}.`);


  } else if (numero_apuesta === cpu) {
    usuario += apuesta * 3;
    console.log(`Ganaste, tu saldo es de ${usuario}.`);
  }
 
  console.log(`el numero de la cpu es: ${cpu}`);
  
  numero_apuesta =(prompt("Ingrese un nuevo número del 1 al 10:"));
  apuesta = (prompt("Cuánto quieres volver a apostar?"));

  if (usuario > 10000 || usuario <= 0) {
    console.log("No puedes apostar más.");
  break;
}}
*/