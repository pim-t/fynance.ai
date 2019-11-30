import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import { grey } from '@material-ui/core/colors';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    '& > .fa': {
      margin: theme.spacing(2),
    },
  },
  iconHover: {
    '&:hover': {
      color: grey[800],
    },
  },
  paper: {
    padding: 3,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <br/><br/>
      <Grid container spacing={3}>
      <Grid item xs={4}>
        
          <Paper className={classes.paper}> <div><br/><Icon className={classes.iconHover} color="grey" style={{ fontSize: 50 }}>
          book
</Icon></div>
<h2>Support Students in Need</h2>
<div style={{padding: 30 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}> <div><br/><Icon className={classes.iconHover} color="grey" style={{ fontSize: 50 }}>
          timeline</Icon></div>
<h2>HIGH RETURNS</h2>
<div style={{padding: 30 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><div><br/><Icon className={classes.iconHover} color="grey" style={{ fontSize: 50 }}>
          assignment</Icon></div>
<h2>DE-RISK</h2>
<div style={{padding: 30 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div></Paper>
        </Grid>
        </Grid>
    </div>
  );
}