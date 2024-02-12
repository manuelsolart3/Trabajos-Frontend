//EJEMPLOS DE DATE 09/08/2023

    // const diahoy = new Date();
    // console.log(diahoy)
    

//OBTENER MI DIA,MES Y AÑO DE NACIMIENTO
    // let cumple = new Date('09-02-2002');
    // const dia = cumple.getDate();
    // const mes = cumple.getMonth()+1;
    // const año = cumple.getFullYear();
    // console.log("Día:", dia);   
    // console.log("Mes:", mes);   
    // console.log("Año:", año);   
    
    // moment.locale('')



//SET
    // const materias = new Set();
    // console.log(materias);
    // materias.add('Matematicas');
    // materias.add('Ingles');
    // materias.add('Sociales');

    // console.log(materias);

//para obtener un valor dentro de un set (true/false)
    // console.log(materias.has('Sociales'));

    
//CONVERTIR UN ARREGLO A UN SET PARA ELIMINAR DUPLICADOS
    // const numeros =[10,10,10,20,30,40,50,36,60,40];
    // console.log(numeros);
    // const DeletDupli = new Set(numeros);
    // console.log(DeletDupli);


//MAP

// Crear un mapa
const miMapa = new Map();

// Agregar pares clave-valor al mapa
miMapa.set('nombre', 'Juan');
miMapa.set('edad', 30);
miMapa.set(42, 'respuesta');

// Obtener valores usando claves
console.log(miMapa.get('nombre')); // Muestra: "Juan"

// Verificar si una clave está en el mapa
console.log(miMapa.has('edad')); // Muestra: true

// Eliminar un par clave-valor del mapa
miMapa.delete(42);

// Iterar sobre los pares clave-valor en el mapa
miMapa.forEach((valor, clave) => {
  console.log(`${clave}: ${valor}`);
});

