import React from 'react';
import './App.css';
import LoginPage from './containers/LoginPage.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RoutingManager from './services/RoutingManager.js'

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <RoutingManager />
        <Switch>
          <Route path='/homepage'>
            < LoginPage />
          </Route>
          <Route path='/login' component={LoginPage} />         
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
