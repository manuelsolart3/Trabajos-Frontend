/* CONDICIONALES EJ
Si el usuario es mayor de edad va a poder votar y 
sino es mayor de edad no pude votar y 
si es mayor de 18 años es su primera vez votando
*/
  /* var edad = 18;
  if (edad===18){
    console.log ("Puedes Votar, Sera Tu primera Votación");

  }else if (edad > 19){
    console.log ("Puedes votar de nuevo");
  }else  {
    console.log ("Tu No Puedes Votar");
  }
*/






//OTRA FORMA CON OPERADOR TERNARIO
/*
var numero =1;
var condicion= numero === 1 ? "Soy real" : "No soy real";
console.log (condicion);
*/




//PIEDRA-PAPEL Y TIJERA
/* alert ("BIENVENIDO A EL JUEGO P-P-T");
prompt ("Introduce tu elección");
var op1 = "piedra";
var op2 = "papel";
var op3 = "tijera";

var resultado = function (user, cpu){
    if (user != cpu){
        if(user === op1 && cpu === op3){
            console.log (`EL usuario acaba de ganar seleccionando ${op1}`)
        }
    }else if (user === op2 && cpu === op1 ){
        console.log (`EL usuario acaba de ganar seleccionando ${op2}`)
    }else if (user === op3 && cpu === op2 ){
        console.log (`EL usuario acaba de ganar seleccionando ${op3}`)
    }else console.log ("ACABAS DE PERDER")
};
*/
/*
var jugador;
var cpu;
if (jugador === "piedra" && cpu==="tijera"){
    console.log ("ganaste con piedra")
}
else if (jugador === "tijera" && cpu==="papel"){
    console.log ("ganaste con tijera")
}
else if (jugador === "papel" && cpu==="piedra"){
    console.log ("ganaste con papel")
}else if (jugador === cpu ){
    console.log ("ES empate")
} else {
    console.log ("Perdiste")
}
*/