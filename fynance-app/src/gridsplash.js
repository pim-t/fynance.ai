import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import investImage from './images/adult-blur-boss-business-288477_2.jpg'; 
// import studentImage from './images/woman-sitting-on-gray-chair-1543895_2.jpg'; 
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={12} sm={6}>
            <div style={{
            position: 'absolute', left: '25%', top: '50%',
            transform: 'translate(-50%, -50%)'}} >
      <Button variant="contained" color="primary">
    INVESTOR 
  </Button></div>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
        <div style={{
            position: 'absolute', left: '75%', top: '50%',
            transform: 'translate(-50%, -50%)'}} >
        <Button variant="contained" color="primary">
    INVESTEE 
  </Button> </div>
  
          <Paper className={classes.paper}></Paper>
        </Grid>
      </Grid>
    </div>
  );
}