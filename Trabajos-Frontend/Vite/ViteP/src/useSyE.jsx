import React, { useState, useEffect } from 'react';

const Contador = () => {
  //Declaramos un componente funcional llamado Contador.
  const [contador, setContador] = useState(0);
  //Creamos una variable de estado llamada contador y una función para actualizarla llamada setContador. Inicializamos contador con el valor 0.
  const incrementar = () => {
    setContador(contador + 1); //Definimos una función incrementar que utiliza setContador para aumentar el valor de contador en 1 cada vez que se llama.
  };

  useEffect(() => { //Utilizamos useEffect para realizar efectos secundarios en nuestro componente.
    if (contador === 5) {
      alert('¡El contador alcanzó 5!');
    }
  }, [contador]); //es un array de dependencias. Indica a React qué variables el efecto debe "observar" para determinar si debe ejecutarse nuevamente.
//solo se ejecutará cuando el valor de "contador" cambie.
  return (
    <div>
      <p>El contador va en: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default Contador;




