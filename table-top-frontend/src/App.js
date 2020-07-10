import React from 'react';
import './App.css';
import LoginPage from './containers/LoginPage.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    < LoginPage />
      <div className="App">
        <Switch>

          <Route path='/login'>  
            < LoginPage />
          </Route>
          <Route path='/homepage'>

          </Route>        
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
