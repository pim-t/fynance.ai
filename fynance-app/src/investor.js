import React from 'react';
import './App.css';
import Grid from './gridsplash'; 
import Profile from './profile';  
import topBanner from './images/group_work.jpg'; 


function Investor() {
  return (<div> 
    <div id ="wrapper"><img alt="Investee" src={topBanner} height="20%" width="100%"/></div>
    <div style={{ position: 'absolute', left: '50%', top: '50%',
      color: "#ffffff",
      transform: 'translate(-50%, -50%)', fontSize: 50}} >
      <div className="fade_in">
        Looking to support a student? 
        </div> </div>
    <div id="wrapper"> <br/> <Grid/> <br/> <br/><br/> </div>

  <center><h1>Student Profiles </h1></center>
  
  <div className="fade_in"><Profile/></div> </div>);
}

export default Investor;