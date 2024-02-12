import React from "react";
import ReactDOM from "react-dom/client";
// import {FA} from "./second";
// import {App} from "./second";
import  './style.css';
import {Registro} from "./registro";
import {Imagen} from "./img";
import {mensaje} from "./registro";
import CounterComponent from './custom_H.jsx';
import Ejemplo1 from './useSyE.jsx';
// import Ejemplo2 from './ejemplo2.jsx';
import Counter from './useReducer.jsx';

//Renderizemos y Asi llamamos a un componente


//creamos un boton y llamos a la funcion mensaje para cunao se cumpla el evento realize la funcion
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode> 

  <Imagen /> 
  <Registro /> 
  <CounterComponent /> 
  <button className="aceptar" onClick={mensaje}>
    ACEPTAR
  </button>
  <Ejemplo1 />

  <Counter />

  </React.StrictMode>
)


