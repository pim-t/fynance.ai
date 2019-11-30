import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import landingPage from './images/landingPageImage.png'; 


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return ( <div> <div><img alt="Investee" src={landingPage} height="auto" width="100%"/></div>
  

    <div style={{ position: 'absolute', left: '50%', top: '50%',
      color: "#ffffff",
      transform: 'translate(-50%, -50%)', fontSize: 50}} >
      <div className="fade_in">
        Investments that power future leaders
        </div>
  </div>
  {/* <div class="fade-in" > Investments that power future leaders </div> */}
  
  <div style={{
            position: 'absolute', left: '55%', top: '75%',
            transform: 'translate(-50%, -50%)'}} >
        <Link to="/investee"><Button size="large" variant="contained" color="primary">
    STUDENT  
  </Button></Link> </div>
  <div style={{
            position: 'absolute', left: '45%', top: '75%',
            transform: 'translate(-50%, -50%)'}} >
      <Link to="/investor"><Button size="large" variant="contained" color="primary">
    INVESTOR 
  </Button></Link></div>  
     </div> )
}

export default Home;