import NavBar from "./components/NavBar";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";

import QuienesSomos from "./pages/QuienesSomos";
import Eventos from "./pages/Eventos";
import Hoteles from "./pages/Hoteles";
import IniciarSesion from "./pages/IniciarSesion";
import Paquetes from "./pages/Paquetes";
import Registrarse from "./pages/Registrarse";
import Transporte from "./pages/Transporte";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import { useEffect } from "react";
import { API_BASE_URL } from "./vite-env.d";
import axios from "axios";
import Hotel from "./pages/Hotel";
import AuthRouter from "./routers/AuthRouter";
import PublicRouter from "./routers/PublicRouter";

function App() {
  const [hotels, setHotels] = useState([]);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    async function getHotels() {
      const response = await axios.get(API_BASE_URL + "/hotels");
      setHotels(response.data);
    }
    getHotels();
  }, []);

  console.log(hotels[0]);
  return (
    <Router>
      <div className="App ">
        <NavBar />
        <Switch>
          <PublicRouter path="/" auth={auth} component={AuthRouter} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
