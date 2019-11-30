import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from './avatar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import yuzuHan from './images/yuzu.jpg';
import Zendaya from './images/zendaya.jpg';
import Alysa from './images/alysa.png';
import Avatar2 from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  bigAvatar: {
    width: '100%',
    height: '100%',
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}> <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
            <div className={classes.root}>
      <Avatar2 alt="Yuzuru" src={yuzuHan} style={{width: '72%',
    height: '72%',}} />
    </div>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <h1>Yuzuru Hanyu</h1>
                <Typography variant="body2" gutterBottom>
                Monash University <br/> 
                Master of Engineering <br/> 
                $20,000 <br/> 
                Predicted ROI: Medium (4-7%)
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <Icon> alarm-off  </Icon> <Icon> assessment </Icon> 
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
            <Button size="small" variant="contained" color="primary"> SUPPORT </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
            <div className={classes.root}>
      <Avatar2 alt="Zendaya" src={Zendaya} className={classes.bigAvatar} style={{width: '50%',
    height: '50%',}}  />
    </div>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <h1>Zendaya</h1>
                <Typography variant="body2" gutterBottom>
                University of Melbourne <br/>
Master of Business Administration (MBA) <br/>
$50,000 <br/>
Predicted ROI: High (>7%) <br/>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                <Icon> alarm-off  </Icon> <Icon> assessment </Icon> 
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
            <Button size="small" variant="contained" color="primary"> SUPPORT </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
            <Avatar2 alt="Alysa" src={Alysa} className={classes.bigAvatar} style={{width: '40%',
    height: '40%',}}  />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <h1>Alyssa Foley</h1> 

                <Typography variant="body2" gutterBottom>
                RMIT <br/>
Juris Doctor Law <br/>
$10,000 <br/>
Predicted ROI: High (>7%)
                </Typography>
                <Typography variant="body2" color="textSecondary">
                 
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                <Icon> alarm-off  </Icon> <Icon> assessment </Icon> 
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
            <Button size="small" variant="contained" color="primary"> SUPPORT </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div></Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}