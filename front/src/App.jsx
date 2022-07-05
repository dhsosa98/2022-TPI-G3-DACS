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

function App() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    async function getHotels(){
      const response = await axios.get(API_BASE_URL + "/hotels");
      setHotels(response.data);
    };
    getHotels();
  }, []);
  
  console.log(hotels[0]);
  return (
    <Router>
      <div className="App ">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quienessomos" component={QuienesSomos} />
          <Route path="/eventos" component={Eventos} />
          <Route exact path="/hoteles" component={Hoteles} />
          <Route path="/hoteles/:id" component={Hotel} />
          <Route path="/iniciarsesion" component={IniciarSesion} />
          <Route path="/paquetes" component={Paquetes} />
          <Route path="/registrarse" component={Registrarse} />
          <Route path="/transporte" component={Transporte} />
          <Route path="/contacto" component={Contacto} />
        </Switch>
      </div>
    </Router>
    // <Router>
    //   <section>
    //     <NavBar/>
    //   </section>
    //   <Switch>
    //     <Home />
    //   </Switch>
    // </Router>
  );
}

export default App;
