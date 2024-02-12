
export const Landing = () => <h2>Landin page (Public)</h2>

export const Home = () =>  {
  return  <h2>Home page User (private)</h2>
}

export const Dashboard = () => <h2> Dashboard (private)</h2>

//esta pagina por ejemplono solo es privada sino que se requiere un permiso adicional
export const Analitics = () => <h2>Analitics Page (private,  permisssion: `analize`)</h2>


export const Admin = () => <h2>Admin Page (private,  permisssion: `admin`)</h2>



//import {Navigate  } from "react-router-dom";
//esta es una forma para uno SOlamente, NO ES ESCALABLE PARA MUCHOS, por creamos un componente a parte para que se encargue de las validaciones
// export const Home = ({user}) =>  {
//     // creamos una condicional para validar el usuario si existe lo dejamos ingresar
//     // sino existe usamos navigate para que navegee hacia otra pagina
// if (!user){
//     return <Navigate to="/Landing"/>
// }
//   return  <h2>Home page User (private)</h2>
// }