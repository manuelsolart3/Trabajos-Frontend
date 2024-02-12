const nombreInput = document.querySelector('#Nombre');
const materiaInput = document.querySelector('#Materia');
const temaInput = document.querySelector('#Tema');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const modalidadInput = document.querySelector('#Modalidad');
const metodoPInput = document.querySelector('#MetodoP');
const valorInput = document.querySelector('#Valor');
const imagenInput = document.querySelector('#Imagen');

// Contenedor para las solicitudes
const contenedorCitas = document.querySelector('#citas');

// Formulario nuevas solicitudes
const formulario = document.querySelector('#nueva-solicitud');
formulario.addEventListener('submit', nuevasolicitud);

let editando = false;

// Eventos
// Cuando el valor de un campo de formulario cambia, la función datosSolicitud() se llama con el nuevo valor.
eventListeners();
function eventListeners() {
    nombreInput.addEventListener('change', datosSolicitud);
    materiaInput.addEventListener('change', datosSolicitud);
    temaInput.addEventListener('change', datosSolicitud);
    fechaInput.addEventListener('change', datosSolicitud);
    horaInput.addEventListener('change', datosSolicitud);
    modalidadInput.addEventListener('change', datosSolicitud);
    metodoPInput.addEventListener('change', datosSolicitud);
    valorInput.addEventListener('change', datosSolicitud);
    imagenInput.addEventListener('change', datosSolicitud); // Manejar cambios en el campo de imagen
}

const SolicitudObj = {
    Nombre: '',
    Materia: '',
    Tema: '',
    fecha: '',
    hora: '',
    Modalidad: '',
    MetodoP: '',
    Valor: '',
    imagen: '' // Agregado campo imagen
};

function datosSolicitud(e) {
    if (e.target.type === 'file') {
        const file = e.target.files[0];
        if (file) {
            // Almacenar la imagen seleccionada en SolicitudObj
            SolicitudObj.imagen = file;
        }
    } else {
        SolicitudObj[e.target.name] = e.target.value;
    }
}

class solicitudes {
    constructor() {
        this.solicitudes = JSON.parse(localStorage.getItem('solicitudes')) || [];
    }

    agregarsolicitud(solicitud) {
        this.solicitudes = [...this.solicitudes, solicitud];
        this.actualizarLocalStorage();
    }

    editarsolicitud(solicitudActualizada) {
        this.solicitudes = this.solicitudes.map((solicitud) =>
            solicitud.id === solicitudActualizada.id ? solicitudActualizada : solicitud
        );
        this.actualizarLocalStorage();
    }

    eliminarsolicitud(id) {
        this.solicitudes = this.solicitudes.filter((solicitud) => solicitud.id !== id);
        this.actualizarLocalStorage();
    }

    actualizarLocalStorage() {
        localStorage.setItem('solicitudes', JSON.stringify(this.solicitudes));
    }

    cargarLocalStorage() {
        this.solicitudes = JSON.parse(localStorage.getItem('solicitudes')) || [];
    }
}

class UI {
    imprimirAlerta(mensaje, tipo) {
        // Crea el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

        // Si es de tipo error agrega una clase
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-solicitud'));

        // Quitar el alert después de 3 segundos
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    imprimirsolicitudes({ solicitudes }) {
        this.limpiarHTML();

        solicitudes.forEach((solicitud) => {
            const { Nombre, Materia, Tema, fecha, hora, Modalidad, MetodoP, Valor, imagen, id } = solicitud;

            const divsolicitud = document.createElement('div');
            divsolicitud.classList.add('solicitud', 'p-3');
            divsolicitud.dataset.id = id;

            // SCRIPTING DE LOS ELEMENTOS...
            const nombreparrafo = document.createElement('h2');
            nombreparrafo.classList.add('card-title', 'font-weight-bolder');
            nombreparrafo.innerHTML = `${Nombre}`;

            const materiaparrafo = document.createElement('p');
            materiaparrafo.innerHTML = `<span class="font-weight-bolder">Materia: </span> ${Materia}`;

            const temaparrafo = document.createElement('p');
            temaparrafo.innerHTML = `<span class="font-weight-bolder">Tema: </span> ${Tema}`;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `<span class="font-weight-bolder">Fecha: </span> ${fecha}`;

            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `<span class="font-weight-bolder">Hora: </span> ${hora}`;

            const modalidadparrafo = document.createElement('p');
            modalidadparrafo.innerHTML = `<span class="font-weight-bolder">Modalidad: </span> ${Modalidad}`;

            const metodoparrafo = document.createElement('p');
            metodoparrafo.innerHTML = `<span class="font-weight-bolder">Método de Pago: </span> ${MetodoP}`;

            const valorparrafo = document.createElement('p');
            valorparrafo.innerHTML = `<span class="font-weight-bolder">Valor: </span> ${Valor}`;

            const imagenparrafo = document.createElement('p');
            imagenparrafo.innerHTML = `<span class="font-weight-bolder">Imagen: </span> ${imagen}`;

            // Agregar un botón de eliminar...
            const btnEliminar = document.createElement('button');
            btnEliminar.onclick = () => eliminarsolicitud(id); // añade la opción de eliminar
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';

            // Añade un botón de editar...
            const btnEditar = document.createElement('button');
            btnEditar.onclick = () => cargarEdicion(solicitud);

            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = 'Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';

            // Agregar al HTML
            divsolicitud.appendChild(nombreparrafo);
            divsolicitud.appendChild(materiaparrafo);
            divsolicitud.appendChild(temaparrafo);
            divsolicitud.appendChild(fechaParrafo);
            divsolicitud.appendChild(horaParrafo);
            divsolicitud.appendChild(modalidadparrafo);
            divsolicitud.appendChild(metodoparrafo);
            divsolicitud.appendChild(valorparrafo);
            divsolicitud.appendChild(imagenparrafo); // Mostrar imagen
            divsolicitud.appendChild(btnEliminar);
            divsolicitud.appendChild(btnEditar);

            contenedorCitas.appendChild(divsolicitud);
        });
    }

    limpiarHTML() {
        while (contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}

const ui = new UI();
const administrarsolicitudes = new solicitudes();
administrarsolicitudes.cargarLocalStorage();

function nuevasolicitud(e) {
    e.preventDefault();

    const { Nombre, Materia, Tema, fecha, hora, Modalidad, MetodoP, Valor, imagen } = SolicitudObj;

    // Validar
    if (Nombre === '' || Materia === '' || Tema === '' || fecha === '' || hora === '' || Modalidad === '' || MetodoP === '' || Valor === '' || !imagen) {
        ui.imprimirAlerta('Todos los campos son obligatorios, incluyendo la imagen', 'error');
        return;
    }

    if (editando) {
        // Estamos editando
        administrarsolicitudes.editarsolicitud({ ...SolicitudObj });
        ui.imprimirAlerta('Guardado Correctamente');
        formulario.querySelector('button[type="submit"]').textContent = 'Crear solicitud';
        editando = false;
    } else {
        // Nuevo Registrando
        // Generar un ID único
        SolicitudObj.id = Date.now();
        // Añade la nueva solicitud
        administrarsolicitudes.agregarsolicitud({ ...SolicitudObj });
        // Mostrar mensaje de que todo está bien...
        ui.imprimirAlerta('Se agregó correctamente');
    }

    // Imprimir el HTML de solicitudes
    ui.imprimirsolicitudes(administrarsolicitudes);

     // Actualizar el localStorage con las solicitudes actuales
     administrarsolicitudes.actualizarLocalStorage();

    // Reiniciar el objeto para evitar futuros problemas de validación
    reiniciarObjeto();

    // Reiniciar Formulario
    formulario.reset();
}
function reiniciarObjeto() {
    // Reiniciar el objeto
    SolicitudObj.Nombre = '';
    SolicitudObj.Materia = '';
    SolicitudObj.Tema = '';
    SolicitudObj.fecha = '';
    SolicitudObj.hora = '';
    SolicitudObj.Modalidad = '';
    SolicitudObj.MetodoP = '';
    SolicitudObj.Valor = '';
    SolicitudObj.imagen = ''; // Restablecer imagen
}

function eliminarsolicitud(id) {
    administrarsolicitudes.eliminarsolicitud(id);
    ui.imprimirsolicitudes(administrarsolicitudes);
    administrarsolicitudes.actualizarLocalStorage();
}

function cargarEdicion(solicitud) {
    const { Nombre, Materia, Tema, fecha, hora, Modalidad, MetodoP, Valor, imagen, id } = solicitud;

    // Reiniciar el objeto
    SolicitudObj.Nombre = Nombre;
    SolicitudObj.Materia = Materia;
    SolicitudObj.Tema = Tema;
    SolicitudObj.fecha = fecha;
    SolicitudObj.hora = hora;
    SolicitudObj.Modalidad = Modalidad;
    SolicitudObj.MetodoP = MetodoP;
    SolicitudObj.Valor = Valor;
    SolicitudObj.imagen = imagen; // Restablecer imagen
    SolicitudObj.id = id;

    // Llenar los Inputs
    nombreInput.value = Nombre;
    materiaInput.value = Materia;
    temaInput.value = Tema;
    fechaInput.value = fecha;
    horaInput.value = hora;
    modalidadInput.value = Modalidad;
    metodoPInput.value = MetodoP;
    valorInput.value = Valor;

    // Mostrar imagen
    if (imagen) {
        const imagenParrafo = document.createElement('p');
        imagenParrafo.innerHTML = '<span class="font-weight-bolder">Imagen: </span>';
        const imagenElement = document.createElement('img');
        imagenElement.src = URL.createObjectURL(imagen); // Cargar la imagen desde el objeto File
        imagenElement.width = 100; // Establecer el ancho de la imagen (ajústalo según tus necesidades)
        imagenParrafo.appendChild(imagenElement);

        // Agregar al HTML
        const divSolicitud = document.querySelector(`[data-id="${id}"]`);
        divSolicitud.appendChild(imagenParrafo);
    }

    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';
    editando = true;
}













