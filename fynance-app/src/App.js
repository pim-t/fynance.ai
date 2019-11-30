import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Footer from './StickyFooter'; 
import Avatar from '@material-ui/core/Avatar';


function App() {
  return (
    <div>
    <div
    style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}
    >
      <center> <Avatar>H</Avatar> </center> <br/>
      <Button variant="contained" color="primary">
    INVESTOR 
  </Button> <Button variant="contained" color="primary">
    INVESTEE 
  </Button> </div>
    
    <Footer/>
    </div>
  );
}

export default App;
