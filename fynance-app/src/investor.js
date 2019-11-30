import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Footer from './StickyFooter'; 
import Grid from './gridsplash'; 
import Profiles from './profiles';

function Investor() {
  return (<div><Grid/> <Profiles/> </div>);
}

export default Investor;