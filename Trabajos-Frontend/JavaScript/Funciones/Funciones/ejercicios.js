
//EJERCICIO QUE SEGUN EL NUMERO QUE INGRESES DIGA QUE MES Y QUE EPOCA DEL AÑO ES,APARTE DIGA CUANTOS DIAS TIENE EL MES
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
   

 /*if (numero_apuesta > 10){
    console.log("NO ES VALIDO TU DIGITO")}

*/
 

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
      

    
    






