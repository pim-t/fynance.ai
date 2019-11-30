import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Footer from './StickyFooter';
import landingPage from './images/landingPageImage.png'; 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return ( <div> <div><img alt="Investee" src={landingPage} height="auto" width="100%"/></div>
  <div style={{
            position: 'absolute', left: '55%', top: '75%',
            transform: 'translate(-50%, -50%)'}} >
        <Link to="/investee"><Button variant="contained" color="primary">
    INVESTEE 
  </Button></Link> </div>
  <div style={{
            position: 'absolute', left: '45%', top: '75%',
            transform: 'translate(-50%, -50%)'}} >
      <Link to="/investor"><Button variant="contained" color="primary">
    INVESTOR 
  </Button></Link></div>   
     <div><Footer/></div>
     </div> )
}

export default Home;