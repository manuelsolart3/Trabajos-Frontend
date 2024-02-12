import  { useReducer } from 'react';

const initialState = { count: 0 }; // Creamos una variable initialState que representa el estado inicial de nuestro componente.

function reducer(state, action) { 
// Definimos una función llamada reducer que toma dos argumentos: state (el estado actual) y action (la acción que se debe realizar).
  switch (action.type) { 
    // Comenzamos un bloque de switch, que se utiliza para evaluar diferentes casos basados en el type de la acción.
    case 'increment':
      return { count: state.count + 1 }; // Si el type de la acción es 'increment', se ejecuta este bloque de código.Devuelve un nuevo objeto con count incrementado en 1.
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
    // Declaramos el componente funcional Counter.
  const [state, despacho] = useReducer(reducer, initialState);
// Utilizamos useReducer para inicializar nuestro estado. state contiene el estado actual y despacho es la función que utilizaremos para enviar acciones al reducer.
  return ( 
    // Comienza el bloque de retorno del componente.

    // Muestra el valor actual del contador.
    <div>
      Count: {state.count}  
      <button onClick={() => despacho({ type: 'increment' })}>Increment</button>
      <button onClick={() => despacho({ type: 'decrement' })}>Decrement</button>
    </div>
    // Crea un botón que, cuando se hace clic, envía una acción de tipo 'increment'o 'decrement' al reducer.
  ); // Cierra el bloque de retorno.
} 
export default Counter;





