import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Footer from './StickyFooter'; 
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from './avatar';
import DB from './Database';

const useStyles = makeStyles(theme => ({
    root: {
    flexGrow: 1,
    },
    paper: {
    padding: theme.spacing(2),  
    margin: 'auto',
    maxWidth: 1000,
    maxHeight: 800,
    },
    image: {
    width: 512,
    height: 512,
    },
    img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    },
}));

function Investee() {
    const classes = useStyles();
    // define a user ID here, get data from firebase, input and add additional headers/bodies
    // Ask how to get async data - await?
    // DB.read("investee", "demo")

    // var user = await DB.read("investee", "demo");

    // var name = user.first + " " + user.last;


  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
                <Avatar/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <h1>
                  NAME - GET FROM FIREBASE
                </h1>
                <Typography variant="body2" gutterBottom>
                  
                Monash University <br/>
Master of Engineering <br/>
$20,000 <br/>
Predicted ROI: Medium (4-7%) <br/>

Bio: Chris is an aspiring mechatronic engineer looking to work in human-robot interaction. A strong communicator with a passion for social justice, he is passionate and driven. Yuzuru is an avid competitive ice-skater and loves food.

Past Experience: <br/>
Prior work for longer than 6 Months: No  <br/>
Prior qualification: Bachelor of Science <br/>
Volunteering experience: Yes
                </Typography>
                {/* <Typography variant="body2" color="textSecondary">
                </Typography> */}
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>

                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">19.00 per month</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Investee;