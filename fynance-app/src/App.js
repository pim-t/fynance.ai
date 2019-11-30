import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Footer from './StickyFooter'; 
import Grid from './gridsplash'; 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


var firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyDV3WdQn9iITjXBqIcoE6M9OLNA1s-Sot8",
    authDomain: "fynance-ai.firebaseapp.com",
    databaseURL: "https://fynance-ai.firebaseio.com",
    projectId: "fynance-ai",
    storageBucket: "fynance-ai.appspot.com",
    messagingSenderId: "969634276824",
    appId: "1:969634276824:web:4576c36c0ce94883c77ead",
    measurementId: "G-XVL7FTX62D"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.database();

function writeSomething(type, id, first, last){
  console.log("wrote a something");
    db.ref("users/"+type+"/"+id).set({
        id: id,
        first:first,
        last:last
    });
}

function readSomething(type, id){
    db.ref("users/"+type+"/"+id).once('value').then(function(snapshot){
        console.log(snapshot.toJSON());
    })
}

// writeSomething("investee", "UmzMcIGkNj", "Bob5", "Builder");

// readSomething("investors", "XAoas6acwn")


function App() {

  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  
  );
}

function Home() {
  return ( <div> 
   <Grid/>    
     <Footer/>
     </div> )
}

function About() {
  return <h2>Investor</h2>;
}

function Users() {
  return <h2>Investee</h2>;
}

export default App;
