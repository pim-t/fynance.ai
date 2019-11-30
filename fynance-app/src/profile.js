import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from './avatar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
              <Avatar/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <h1>Yuzuru Hanyu</h1>
                <Typography variant="body2" gutterBottom>
                  Monash University <br/> 
                  Entrepreneur in training! <br/> 
                  Return in Investment: 5% 
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
              <Avatar/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <h1>Shoma Uno</h1>
                <Typography variant="body2" gutterBottom>
                  Unvirsity of Melbourne <br/> 
                  Looking to complete my MBA <br/> 
                  Return in Investment: 5%
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
              <Avatar/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <h1>Evgenia Medvedeva</h1> 

                <Typography variant="body2" gutterBottom>
                  RMIT <br/> 
                  Taking it one day at a time <br/> 
                  Return in Investment: 5%
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