import NavBar from "./components/NavBar"
import Login from "./components/Login"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import QuienesSomos from "./pages/QuienesSomos";
import Eventos from "./pages/Eventos";
import Hoteles from "./pages/Hoteles";
import IniciarSesion from "./pages/IniciarSesion";
import Paquetes from "./pages/Paquetes";
import Registrarse from "./pages/Registrarse";
import Transporte from "./pages/Transporte";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";


function App() {

  return(
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quienessomos" component={QuienesSomos} />
          <Route path="/eventos" component={Eventos} />
          <Route path="/hoteles" component={Hoteles} />
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
  )
}

export default App
