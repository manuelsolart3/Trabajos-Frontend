


function solicitarDatos() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const cedula = document.getElementById('cedula').value;
    const nacimiento = document.getElementById('nacimiento').value;
    const celular = document.getElementById('celular').value;

    return { nombre, apellido, edad, cedula, nacimiento, celular };
}

function solicitarMateria() {
    const nombre_materia = document.getElementById('materia').value;
    const horas = document.getElementById('horas').value;

    return { nombre_materia, horas };
}

function mostrar(solicitarDatos, solicitarMateria) {
    console.log("----Datos del docente---");
    console.log("Nombre:", solicitarDatos.nombre, solicitarDatos.apellido);
    console.log("Edad:", solicitarDatos.edad);
    console.log("Cédula:", solicitarDatos.cedula);
    console.log("Fecha de Nacimiento:", solicitarDatos.nacimiento);
    console.log("Celular:", solicitarDatos.celular);

    console.log("-Datos de la asignatura-");
    console.log("Nombre de la materia:", solicitarMateria.nombre_materia);
    console.log("Horas:", solicitarMateria.horas);
}

if (nacimiento < "2005-01-01"){
    alert("eres menor de edad, el docente debe ser mayor de edad");
}
else {
const formulario = document.querySelector("#formulario");

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const docente = solicitarDatos();
    const materia = solicitarMateria();
    mostrar(docente, materia);
})};

 


  localStorage.setItem('formulario', formulario);