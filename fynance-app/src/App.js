import React from 'react';
import logo from './logo.svg';
import './App.css';
import DB from './Database';

import Home from './home';
import Investee from './investee';
import Investor from './investor';
import Menu from './menuBar';
import { red } from '@material-ui/core/colors';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    
    <Router>
     <div>
      <Menu/>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/investor">
          <Investor />
        </Route>
        <Route path="/investee">
          <Investee />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch> </div>
  </Router>
  
  );
}


export default App;
