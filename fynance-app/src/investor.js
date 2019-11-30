import React from 'react';
import './App.css';
import Grid from './gridsplash'; 
import Profile from './profile';  


function Investor() {
  return (<div ><div id="wrapper"> <Grid/> <br/> </div>

  <center><h1>Student Profiles </h1></center>
  
  <div className="fade_in"><Profile/></div> </div>);
}

export default Investor;