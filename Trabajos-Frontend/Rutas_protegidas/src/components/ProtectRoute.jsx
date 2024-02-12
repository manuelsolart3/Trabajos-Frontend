// para usar este componente tengo que entregarle todos los componenetes para que pase por ellos
// recuerda que estamos recibiendo un componente children asi que lo damos como parametro
import {Navigate,Outlet } from "react-router-dom";

export const ProtectRoute = ({ EsPermitido, children,redirectTo="/Landing" }) => {

    if (!EsPermitido){
        return <Navigate to={redirectTo}/>
    }

  return children ? children : <Outlet/>
};

//Outlet es un componente ayuda para que se puedan usar muchas rutas
//hacemos un return si hay un children que lo devuelva sino que  devuelva el outlet