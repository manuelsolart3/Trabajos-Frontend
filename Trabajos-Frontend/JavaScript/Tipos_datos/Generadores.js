//GENERADORES
// function *crearGenerador (){
//     yield 1;
//     yield 'manuel';
//     yield 3+3 ;
//     yield false ;

// }

// const iterador = crearGenerador();
// console.log(iterador);




// Definir una función generadora llamada numerosPares
// function  *crearGenerador() {
//     yield 1;
//     yield 'manuel';
//     yield 3+3 ;
//     yield false ;
//     }
  
  
//   // Crear un iterador utilizando la función generadora
//   const iterador = crearGenerador();
  
//   console.log(iterador.next()); 
//   console.log(iterador.next()); 
//   console.log(iterador.next().value); 
//   console.log(iterador.next().value); 
  



//EJEMPLO=> HACER UN GENERADOR QUE ITERE LOS PROMPTS CREADOS

function *Gmateria(profesores) {
    for (let i = 0; i< profesores.length; i++){
        yield profesores[i]

}    
}

  // Crear un iterador utilizando la función generadora
//creo un array vacio para recorrer los prompts
  let Valores= [];

  const profesores = [
    prompt("Escribe el primer docente"),
    prompt("Escribe el segundo docente"),
    prompt("Escribe el tercer docente"),
    prompt("Escribe el cuarto docente"),
    prompt("Escribe el quinto docente")];

  const iterador = Gmateria(profesores);



//PARA QUE RECORRA NUESTRO ITERADOR Y AGREGUE VALOR * VALOR EN Valores
for (const valor of iterador) {
    Valores.push(valor);
}
console.log(Valores);


  
 
  