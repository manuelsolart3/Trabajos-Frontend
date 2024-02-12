const formulario = document.querySelector('#formulario');
const listaImagenes = document.querySelector('#lista-imagenes');
let imagenes = [];

eventListeners();

function eventListeners() {
  formulario.addEventListener('submit', subirImagen);
  
  document.addEventListener('DOMContentLoaded', () => {
    imagenes = JSON.parse(localStorage.getItem('imagenes')) || [];
    crearHTML();
  });
}

function subirImagen(e) {
  e.preventDefault();
  const inputImagen = document.querySelector('#imagen');
  const imagen = inputImagen.files[0];

  if (!imagen) {
    mostrarError('Selecciona una imagen.');
    return;
  }

  const imagenObj = {
    id: Date.now(),
    imagen: URL.createObjectURL(imagen)
  }

  imagenes = [...imagenes, imagenObj];
  crearHTML();
  formulario.reset();
}

function mostrarError(error) {
  const mensajeError = document.createElement('p');
  mensajeError.textContent = error;
  mensajeError.classList.add('alertaroja');

  const contenido = document.querySelector('#contenido');
  contenido.appendChild(mensajeError);

  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}


//CREAR
function crearHTML() {
  limpiarHTML();

  imagenes.forEach((imagen) =>{//INSERTAR IMAGEN
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = imagen.imagen;
    li.appendChild(img);
    listaImagenes.appendChild(li);
    img.style.width = "500px";
    img.style.height = "500px";

    //ELIMINAR
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-imagenes';
    botonBorrar.innerText = 'X';
    botonBorrar.style.fontSize = '30px'; 
    
    botonBorrar.onclick = () => {
      borrarimagen(imagen.id);
    }

    li.appendChild(botonBorrar); 


//CORAZON 
        const heart= document.createElement('img')
    heart.style.witdth="150px";
    heart.src= "imagenes/amor1.png"
    let count=0
    heart.addEventListener('click',()=>{ 
  if(count===0){
    heart.src= "imagenes/amor.png"
    count = 1;
    const contenedor = document.querySelector('.container'); // Cambia "contenedor" al id correcto
    contenedor.appendChild(heart);
}
});
  });

  agregarStorage();
}


function borrarimagen(id) {
  imagenes = imagenes.filter(imagen => imagen.id !== id);
  crearHTML();
}

function limpiarHTML() {
  while (listaImagenes.firstChild) {
    listaImagenes.removeChild(listaImagenes.firstChild);
  }
}

function agregarStorage() {
  localStorage.setItem('imagenes', JSON.stringify(imagenes));
}



