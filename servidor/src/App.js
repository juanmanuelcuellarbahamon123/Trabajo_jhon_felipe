import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 
import Index from './components/Index';
import Registro from './components/Auth/Registro';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';
import RutaPrivada from './components/rutas/RutaPrivada';

import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';

import tokenAuth from './config/token';

const token = localStorage.getItem('token');
if(token) tokenAuth(token);

const App = () => {
  return (
    <AlertaState>
      <AuthState>
        <Router>
          <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/registro' component={Registro} />
            <Route exact path='/login' component={Login} />
            <RutaPrivada exact path='/dashboard' component={Dashboard} />
          </Switch>
        </Router>
      </AuthState>
    </AlertaState>
  );
}

export default App;
