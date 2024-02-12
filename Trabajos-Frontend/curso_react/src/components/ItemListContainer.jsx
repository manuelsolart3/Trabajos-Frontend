import { useState, useEffect } from "react";
import data from "../data/productos.json";
import "../style.css"; // Importa tu archivo CSS aquí

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const pedirProductos = () => {
      // Simulación de solicitud asincrónica (reemplaza con tu lógica real)
      return Promise.resolve(data);
    };

    pedirProductos()
      .then((res) => {
        setProductos(res);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
      });
  }, []);

  return (
    <div className="item-list-container">
      {
      productos.map((producto) => (

        <div key={producto.id} className="product-card">
          <img src={producto.image} alt={producto.title} />
          <h2>{producto.title}</h2>
          <p>{producto.price}</p>
          <p>{producto.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
