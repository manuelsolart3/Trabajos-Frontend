//MAS ITERADORES
//ENTRY CON ARREGLO
const frutas = ['manzana', 'banana', 'naranja'];

for (const [indice, fruta] of frutas.entries()) {
    console.log(`Índice: ${indice}, Fruta: ${fruta}`);
  }
//ENTRY CON SET

const colores = new Set(['rojo', 'verde', 'azul']);

// Usar el método entries() en el conjunto
for (const [valor, valor2] of colores.entries()) {
  console.log(`Valor: ${valor}, Valor duplicado: ${valor2}`);
}



