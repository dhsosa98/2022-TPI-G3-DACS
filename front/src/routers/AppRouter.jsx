import React from 'react'
import { Router, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../pages/Home';

const AppRouter = () => {
    
    // Para Login
    const [log, setLog] = React.useState(false);

  return (
      <Router>
        <NavBar />
        <Switch>
            <Home />
        </Switch>    
    </Router>
  )
}

export default AppRouter