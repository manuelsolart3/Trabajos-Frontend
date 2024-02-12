import {
  profesores
} from "./baseDatos.js";


const nombre = document.querySelector("#nombre");
const materia = document.querySelector("#materia");
const tema= document.querySelector("#tema");
const modalidadhtml = document.querySelector("#modalidad");
const calificacion = document.querySelector("#calificacion");
const jornada = document.querySelector("#jornada");



//alamacenamos los valores de busqueda
const datosBusqueda = {
  nombre: "",
  materia: "",
  tema: "",
  moda: "",
  calificaion: "",
  jornada: "",
  
};

document.addEventListener("DOMContentLoaded", () => {
  
 //Creamo el for  para recorrer todos los nombres
  for (let i = 0; i < profesores.length; i++) {
      const nombreinsert = document.createElement("option");
const pro = profesores[i];


//Igualamos el valor y texcontent a el nombre recorrido
nombreinsert.value = pro.nombre;
nombreinsert.textContent = pro.nombre;
      nombre.appendChild(nombreinsert);


const materiainsert = document.createElement("option");
//Igualamos el valor y texcontent a el nombre recorrido
materiainsert.value = pro.materia;
materiainsert.textContent =pro.materia;
      materia.appendChild(materiainsert);



const temainsert = document.createElement("option");
//Igualamos el valor y texcontent a el nombre recorrido
temainsert.value = pro.tema;
  temainsert.textContent =pro.tema;
     tema.appendChild(temainsert);


// const modalinsert = document.createElement("option");
// //Igualamos el valor y texcontent a el nombre recorrido
// modalinsert.value = pro.modalidad;
//   modalinsert.textContent =pro.modalidad;
//      modalidad.appendChild(modalinsert);


const calificainsert = document.createElement("option");
//Igualamos el valor y texcontent a el nombre recorrido
calificainsert.value = pro.calificacion;
  calificainsert.textContent =pro.calificacion;
     calificacion.appendChild(calificainsert);


     const jornadainsert = document.createElement("option");
     //Igualamos el valor y texcontent a el nombre recorrido
     jornadainsert.value = pro.jornada;
       jornadainsert.textContent =pro.jornada;
          jornada.appendChild(jornadainsert);



          const newmod = new Set();
        modalidadhtml.innerHTML = "";
          for (const i of profesores) {
            newmod.add(i.modalidad);
          }
          
          newmod.forEach(modalidad => {
            const modalinsert = document.createElement("option");
            modalinsert.value = modalidad;
            modalinsert.textContent = modalidad;
            modalidadhtml.appendChild(modalinsert);
          });



          const newjor = new Set();
        jornada.innerHTML = "";
          for (const i of profesores) {
            newjor.add(i.jornada);
          }
          
          newjor.forEach(modalidad => {
            const jorinsert = document.createElement("option");
            jorinsert.value = modalidad;
            jorinsert.textContent = modalidad;
            jornada.appendChild(jorinsert);
          });
          
  }})
 
//La función toma un parámetro e, que representa el evento en sí.
  nombre.addEventListener("change", (e) => {
    // Dentro de la función, esto está tomando el valor seleccionado del campo <select>     
    //y lo asigna a la propiedad nombre del objeto datosBusqueda.
   datosBusqueda.nombre = e.target.value;
  // mostrarTutor();
    console.log(datosBusqueda);});


//MATERIA SELECCIONADA
    materia.addEventListener("change", (e) => {
     datosBusqueda.materia = e.target.value;
      console.log(datosBusqueda);});  


//TEMA SELECCIONADA
      tema.addEventListener("change", (e) => {
        datosBusqueda.tema = e.target.value;
         console.log(datosBusqueda);});


//MODALIDAD SELECCIONADA
  modalidad.addEventListener("change", (e) => {
     datosBusqueda.moda = e.target.value;
      console.log(datosBusqueda);});

//CALIFICACION SELECCIONADA
      calificacion.addEventListener("change", (e) => {
        datosBusqueda.calificaion = e.target.value;
         console.log(datosBusqueda);});

//JORNADA SELECCIONADA
         jornada.addEventListener("change", (e) => {
          datosBusqueda.jornada = e.target.value;
           console.log(datosBusqueda);});
  



























//   });


  

  


















































// // //Variable  con el valor del año actual
// // const max = new Date().getFullYear();
// // // const min = max - 20;

// // //alamacenamos los valores de busqueda
// // const datosBusqueda = {
// //   nombre: "",
// //   materia: "",
// //   tema: "",
// //   modalidad: "",
// //   calificaion: "",
// //   jornada: "",
  
// // };

// // //EVENTO CUANDO SE CARGA EL DOM

// // document.addEventListener("DOMContentLoaded", () => {
// //   mostrarprofesor();
// //   llenarSelect(); 
// // });

// // //EVENTOS PARA CADA UNO DE LOS SELECT

// // nombre.addEventListener("change", (e) => {
// //   console.log("Se escogio una opción");
// //   console.log(e.target.value); //este valor es el que se debe de almacenar en el objeto que se creo
// //   datosBusqueda.nombre = e.target.value;
// //   //console.log(datosBusqueda);
// //   //filtrarprofesor();
// // });

// // // FUNCIONES

// // //definimos la funcion mostrarprofesors
// // function mostrarprofesor() {
// //   profesores.forEach((profesor) => {
// //     const profesorHTML = document.createElement("p");
// //     profesorHTML.innerHTML = `
// //              <p>${profesor.nombre} ${profesor.materia} - ${profesor.tema} -  
// //              ${profesor.modalidad} Puertas - Transmisión: ${profesor.calificacion} 
// //              - Precio: ${profesor.jornada} </p>
// //          `;
// //     resultado.appendChild(profesorHTML);
// //   });
// // }

// // function llenarSelect() {
// //   console.log("LLenado el Select");
// //   console.log(min);
// //   console.log(max);
// //   for (let i = max; i >= min; i--) {
// //     //este es cambio para que me muestre los años desde el max
// //     //for (let i = min; i <= max; i++) {
// //     const opcion = document.createElement("option");
// //     opcion.value = i;
// //     opcion.textContent = i;
// //     year.appendChild(opcion);
// //   }
// // }

// // year.addEventListener("change", (e) => {
// //   datosBusqueda.year = e.target.value;
// //   console.log(datosBusqueda);
// // });

// // minimo.addEventListener("change", (e) => {
// //   datosBusqueda.minimo = e.target.value;
// //   console.log(datosBusqueda);
// // });

// // maximo.addEventListener("change", (e) => {
// //   datosBusqueda.maximo = e.target.value;
// //   console.log(datosBusqueda);
// // });

// // puertas.addEventListener("change", (e) => {
// //   datosBusqueda.puertas = e.target.value;
// //   console.log(datosBusqueda);
// // });

// // transmision.addEventListener("change", (e) => {
// //   datosBusqueda.transmision = e.target.value;
// //   console.log(datosBusqueda);
// // });

// // color.addEventListener("change", (e) => {
// //   datosBusqueda.color = e.target.value;
// //   console.log(datosBusqueda);
// // });

// // function filtrarprofesor() {
// //   console.log("Filtrando por profesormoviles");
// //   const resultado = profesors.filter(filtrarnombre);
// //   console.log(resultado);
// // }

// // function filtrarnombre(profesor) {
// //   if (datosBusqueda.nombre) {
// //     return profesor.nombre === datosBusqueda.nombre;
// //   }
// //   return profesor;
// // }

