import React from 'react';
import './App.css';
import LoginPage from './containers/LoginPage.js'
import HomePage from './containers/HomePage.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RoutingManager from './services/RoutingManager.js'

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <RoutingManager />
        <Switch>
          <Route path='/homepage' component={HomePage} /> 
          <Route path='/login' component={LoginPage} />
          <Route path='/game' component={''} />        
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
