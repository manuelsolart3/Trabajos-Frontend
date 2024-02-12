
// let cursos = [];
// const agregarBotones = document.querySelectorAll('.agregar-carrito');
// const botonVaciarCarrito = document.querySelector('vaciar-carrito')
// const listaC = document.querySelector('#lista-cursos')

   





// document.addEventListener('DOMContentLoaded', () => {
    
//     // Traemos todos los botones que se llaman "agregar al carrito"
//     const botonesAgregar = document.querySelectorAll('.agregar-carrito');

//     // Agregamos evento de clic a cada botón "Agregar al carrito"
//     for (let i = 0; i < botonesAgregar.length; i++) {
//         const boton = botonesAgregar[i];

//         //agregamos el evento con los datos que necesitamos
//         boton.addEventListener('click', () => {
//             const card = boton.closest('.card'); // se utiliza para encontrar el elemento padre más cercano del botón que tiene la clase .card
//             const imagenProducto = card.querySelector('.imagen-curso').src;
//             const nombreProducto = card.querySelector('.info-card h4').textContent;
//             const precioProducto = card.querySelector('.u-pull-right').textContent;

//             agregarAlCarrito(imagenProducto, nombreProducto, precioProducto);
//             guardarEnLocalStorage(imagenProducto, nombreProducto, precioProducto);

           

//         });
//     }
// });

// // Agregar producto o curso al carrito
// function agregarAlCarrito(imagen, nombre, precio) {
//     const item = document.createElement('tr');
//     item.innerHTML = `
//         <td><img src="${imagen}" class="imagen-curso"></td>
//         <td>${nombre}</td>
//         <td>${precio}</td>
//     `;
//     //llamos al carrito para agregar el hijo "item"
//     const listaCarrito = document.getElementById('lista-carrito');
//     listaCarrito.appendChild(item);

//        // ELIMINAR
//     const botonBorrar = document.createElement('a');
//     botonBorrar.classList = 'borrar-curso';
//     botonBorrar.innerText = 'X';
//     botonBorrar.style.fontSize = '30px'; 
//     window.location.reload();
    
//     //llamamos a la funcion despues que se haga click se elimine "item" es el curso
//     botonBorrar.onclick = () => {
//         borrarCurso(item);
//     }
//     item.appendChild(botonBorrar); 
// }
   
    

// // Función para borrar un curso
// function borrarCurso(item) {
//    localStorage.removeItem("carrito")
  
// }
 



// function guardarEnLocalStorage(imagen, nombre, precio) {
//     let carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
    
//     carritoGuardado.push({ imagen, nombre, precio });
    
//     localStorage.setItem('carrito', JSON.stringify(carritoGuardado));
//     console.log(carritoGuardado); 
    
// }




// const vaciarbtn = document.querySelector('#vaciar-carrito'); 
// function vaciarcarrito(event) {
//     event.preventDefault();

//     const listaCarrito = document.querySelector('#lista-carrito'); 
    
//     while (listaCarrito.firstChild) {
//         listaCarrito.removeChild(listaCarrito.firstChild);
//     }
// }
// vaciarbtn.addEventListener("click", vaciarcarrito);



/**
 * For Mostrar o repetir data
 * Get o traer data del local Storage
 */

// Obtener Botton Post data
/**
 * Post o guarda Data en el local Storage
 * window.location.reload()
 */


let contadorCursos = {};
let cursos = [];
const botonVaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
const botonesAgregar = document.querySelectorAll('.agregar-carrito');



document.addEventListener('DOMContentLoaded', () => {


     
              
    // Cambiamos el for loop por un for...of para una sintaxis más limpia
    for (let i = 0; i < botonesAgregar.length; i++) {
        const boton = botonesAgregar[i]
        //agregamos el evento con los datos que necesitamos
        boton.addEventListener('click', () => {
            const card = boton.closest('.card'); // se utiliza para encontrar el elemento padre más cercano del botón que tiene la clase .card
            const imagenProducto = card.querySelector('.imagen-curso').src;
            const nombreProducto = card.querySelector('.info-card h4').textContent;
            const precioProducto = card.querySelector('.u-pull-right').textContent;

            contadorCursos[nombreProducto] = (contadorCursos[nombreProducto] || 0) + 1;

            let cantidad = contadorCursos[nombreProducto];
            agregarAlCarrito(imagenProducto, nombreProducto, precioProducto, cantidad)
            guardarEnLocalStorage(imagenProducto, nombreProducto, precioProducto);

            
        });
    }
});


function agregarAlCarrito(imagen, nombre, precio , numerodecursos) {
    // Crear un elemento <tr> para el carrito
    const item = document.createElement('tr');
    item.innerHTML = `
        <td><img src="${imagen}" class="imagen-curso"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${numerodecursos}</td>
        
    `;
        

    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.appendChild(item);


    // Crear y agregar el botón de borrar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-curso';
    botonBorrar.innerText = 'X';
    botonBorrar.style.fontSize = '30px';
   //llamamos a la funcion despues que se haga click se elimine "item" que es el curso
    botonBorrar.onclick = () => {
        borrarCurso(item);
    }
    item.appendChild(botonBorrar);
}



function borrarCurso(item) {
    const listaCarrito = document.getElementById('lista-carrito');
    // Remover el elemento "item" del carrito
    listaCarrito.removeChild(item);
    // actualizamos el local para que se elimine
    actualizarLocalStorage();
}

function guardarEnLocalStorage(imagen, nombre, precio) {
    let carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
    carritoGuardado.push({ imagen, nombre, precio });
    localStorage.setItem('carrito', JSON.stringify(carritoGuardado));
    console.log(carritoGuardado);
}

// Función para actualizar el Local Storage después de borrar un curso
function actualizarLocalStorage() {
    const itemsCarrito = document.querySelectorAll('#lista-carrito tr');
    const carritoGuardado = [];
    itemsCarrito.forEach(item => {
        const imagen = item.querySelector('.imagen-curso').src;
        const nombre = item.querySelector('td:nth-child(2)').textContent;
        const precio = item.querySelector('td:nth-child(3)').textContent;
         // Creamos un objeto con la información obtenida y lo agregamos al arreglo carritoGuardado
        carritoGuardado.push({ imagen, nombre, precio });
    });
    localStorage.setItem('carrito', JSON.stringify(carritoGuardado));
}

// Agregamos un event listener al botón de vaciar carrito
botonVaciarCarrito.addEventListener('click', () => {
    // Removemos todos los hijos de la lista de carrito
    const listaCarrito = document.getElementById('lista-carrito');
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
    
    localStorage.removeItem('carrito');
});

 
