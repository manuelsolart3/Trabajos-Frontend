import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, Landing, Admin, Dashboard, Analitics } from "./pages";
import { useState } from "react";
import { ProtectRoute } from "./components/ProtectRoute";

function App() {
  //variable que va almacenar un usuario
  const [user, setUser] = useState(null);

  //LOGIN
  const login = () => {
    //aqui se da por dado que ya se enviaron todas las peticiones al server
    setUser({
      id: 1,
      name: "manuel",
      // vamos darle permisos a este user (esto es lo que viene del backend)
      Permissions: ["String_Para_Permiso_De_Ruta"],
      //otro ejemplo de rol para el admin
      roles: ["Permiso_Admin"],
    });
  };

  //se limpieza setuser estableciendolo en su estado inicial
  // DONDE LLAMAMOS LAS FUN? en los botones de condicional
  const logout = () => setUser(null);

  return (
    /* Que URL va tener desde el navegador */
    <BrowserRouter>
      {/* creamos condicional, si existe "user" le mostramos logout sino login */}
      <Navigation />
      {user ? (
        <button onClick={logout}> Logout </button>
      ) : (
        <button onClick={login}> Login </button>
      )}

      {/* para simplificar codigo creamos un Route con el ProtectRoute para que todo lo que este dentro sea protegio  */}
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/Landing" element={<Landing />} />

        <Route element={<ProtectRoute EsPermitido={!!user} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route
          path="/analitics"
          element={
            <ProtectRoute
              EsPermitido={
                !!user &&
                user.Permissions.includes("String_Para_Permiso_De_Ruta")
              }
              //  sino se cumple lo redirecciona a home
              redirectTo="/home"
            >
              <Analitics />
            </ProtectRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectRoute
              EsPermitido={!!user && user.roles.includes("Permiso_Admin")}
              redirectTo="/home"
            >
              <Admin />
            </ProtectRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

//Esta funcion crea una lista de link para dirigirse a las rutas
function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Landing">Landing</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/analitics">Analitics</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}
export default App;

//como hacer roles paara admin por ejemplo
// !!user  lo convierte en un boolean si existe true sino false

//EsPermitido={!!user && user.Permissions.includes('analize')}>
//es permitido si el usuario existe y si el usuario tiene permisos incluido con el string 'analize' puede ver la ruta
