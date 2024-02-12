import PropTypes from "prop-types";

export const Registro =  ({nombre, apellido, telefono, profesion, asignatura }) => {

  return (
    <>
      <h1>DOCENTES</h1>
      <h1>{nombre}</h1>
      <h2>{apellido}</h2>
      <h2>{telefono}</h2>
      <h2>{profesion}</h2>
      <h2>{asignatura}</h2>
    </>
  );
}

Registro.propTypes = {
  nombre: PropTypes.string.isRequired , 
  apellido: PropTypes.string.isRequired, 
  telefono: PropTypes.number.isRequired,
  profesion: PropTypes.string.isRequired, 
  asignatura: PropTypes.string.isRequired 
}

Registro.defaultProps = {
  nombre: "Manuel" , 
  apellido: "Solarte", 
  telefono: 3145784663,
  profesion: "Abogado", 
  asignatura: "Derecho penal °2" 
}

//creamos una alerta que la importamos en un evento 
export const mensaje =()=> alert("Hola")