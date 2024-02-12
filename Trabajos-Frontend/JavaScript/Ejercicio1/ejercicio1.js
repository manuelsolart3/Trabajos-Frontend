// Hacer una autenticacion de inicio de sesion y se necesita un formulario que tenga (email y contraseña minimo 8 caracteres)tiene que tener validacion en el correo (correo invalido) y validacion a la contraseña 






const email = document.getElementById("email");
const contrasena = document.getElementById("contrasena");
const formulario = document.querySelector("#formulario");
const body = document.getElementById("cuerpo");




formulario.addEventListener('submit', (event)=>{
event.preventDefault();


body.style.backgroundColor="pink"

if (email.value==="manuel123@gmail.com" && contrasena.value === "12345678"){
   alert ("Bienvenido manuel!")
   body.style.backgroundColor="red"
}
   else if (email.value === "solarte@gmail.com"  && contrasena.value === "manuel123" ){
      alert ("Hola solarte!")
      body.style.backgroundColor="blue"
   }
console.log(email)
})






