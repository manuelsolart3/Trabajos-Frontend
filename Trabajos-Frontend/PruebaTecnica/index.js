// Esta función recibe un callback llamado "done" como parámetro
function getCharacters(done) {
  //realizamos una solicitud (fetch) a la API
  const results = fetch("https://rickandmortyapi.com/api/character");

  results
    .then((response) => response.json()) //convertimos la respuesta a formato Json
    .then((data) => {
      //pasamos como argumento los datos obtenidos en "done"
      done(data);
    });
}

//llamamos la funcion recibiendo los datos de "data"
getCharacters((data) => {
  //iteramos cada  personaje
  data.results.forEach((personaje) => {
    //creamos un elemento HTML para cada personaje
    const article = document.createRange().createContextualFragment(
      //codigo HTML
      `
        <articule>
        
        <div class="container-img">
        <img src="${personaje.image}" alt="personaje">
          </div>
           
        <h2>${personaje.name}</h2>
        <span>${personaje.gender}</span>
        </br>
        <span>${personaje.species}</span>

      
        
      </articule>
      `
    );
    //seleccionamos el elemeno main
    const main = document.querySelector("main");
    //agregamos el fragmento creado en article como hilo
    main.append(article);
  });
});
const modal = document.getElementById("modal");

// Obtener el botón para cerrar el modal
const closeButton = modal.querySelector(".close");

// Función para abrir el modal
function openModal() {
    modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = "none";
}

// Evento click para abrir el modal
document.addEventListener("DOMContentLoaded", () => {
    openModal();
});

// Evento click para cerrar el modal
closeButton.addEventListener("click", closeModal);

// Evento para cerrar el modal si se hace clic fuera de él
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});