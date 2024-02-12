const saludo= prompt('Ingrese su usuario');



const texto= document.querySelectorAll('#text1');

const titulo= <h1>BIENVENIDO {saludo}</h1>

ReactDom.render (titulo , texto);





