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
                <Typography gutterBottom variant="subtitle1">
                  Yuzuru Hanyu
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Dreamt of Paradise
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
                <Typography gutterBottom variant="subtitle1">
                  Shoma Uno
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Viva la Vida 
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
                <Typography gutterBottom variant="subtitle1">
                  Evgenia Medvedeva
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Life in Technicolor
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
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}