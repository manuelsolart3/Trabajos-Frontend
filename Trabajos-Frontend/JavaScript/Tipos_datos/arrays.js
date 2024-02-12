//DESTRUCTURING ARRAYS
// COMO DESTRUCTURAR UN ARRAY EN REACT



const ReturnArreglo = () =>{
  return [5,7,"Hola"];
}
const [pos1, pos2, pos3]= ReturnArreglo();  
console.log(pos2);




const useS=(nombre)=>{
   return [nombre, ()=>{console.log("EL USUARIO ESTA ACTIVO")}];

}

const [nombre,arrowfunction] = useS("Manuel Solarte");
console.log(nombre);
useS();
