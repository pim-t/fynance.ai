import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Footer from './StickyFooter'; 
import Grid from './gridsplash'; 

function Home() {
  return ( <div> 
   <Grid/>    
     <Footer/>
     </div> )
}

export default Home;