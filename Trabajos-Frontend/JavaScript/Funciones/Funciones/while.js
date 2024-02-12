//WHILE
/*
let i = 0;

while (i <= 5) {
  console.log(i);
  i++;
}
*/


/*
var estudiantes = ["manuel" , "alejandro" , "daniel" , "camilo" ];
function SE (estudiante) {
console.log (`HOLA ${estudiante}`)
};
while (estudiantes.length > 0) {
let estudiante =  estudiantes.shift();
SE (estudiante);
}
*/


// Si el parámetro deathCount es igual a 0, debes retornar un array con los mismos elementos que tenía el array de estudiantes y agregando el elemento nuevo al final.
// Si el parámetro deathCount es mayor a 0, debes retornar un array con los mismos elementos del array estudiantes pero eliminando la cantidad de estudiantes que indica el número deathCount y agregando el elemento nuevo al final.
//EJERCICIO
/*
function solution(estudiantes, co, nuevo) {
      //queremos eliminar estudiantes mientras deathCount sea mayor que cero.
    while (co > 0) {
      estudiantes.pop(); 
      co--; // Decrementamos el contador de muertes
    }
    
    estudiantes.push(nuevo); // Agregamos el nuevo estudiante al final del array
    
    return estudiantes; // Retornamos el array actualizado
  }
const estudiantes = ["manuel" , "alejandro" , "daniel"]
const co = 1
const nuevo = "Camilo"
console.log(solution(estudiantes, co, nuevo));

*/
