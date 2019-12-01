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
    
    <div className={classes.root, "fade_in"}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <br/><br/>
      <Grid container spacing={3} >
      <Grid item xs={4} >
        
          <Paper className={classes.paper}> <div><br/><Icon className={classes.iconHover} color="grey" style={{ fontSize: 50 }}>
          book
</Icon></div>
<h1>Support Students in Need</h1>
<div style={{padding: 30 }}>Give back by helping future leaders through their studies and into the workforce. 78% of students experience financial stress. Investments help students focus on achieving their potential by minimising the financial stresses of paying for living and university expenses while pursuing studies in their chosen field.
</div>
</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}> <div><br/><Icon className={classes.iconHover} color="grey" style={{ fontSize: 50 }}>
          timeline</Icon></div>
<h1>High Returns</h1>
<div style={{padding: 30 }}>With returns better than that of many traditional investments, InvestInMe is an opportunity to benefit while doing social good. As postgraduates are eager to start earning money and climb the social ladder, there is uncapped potential for return with the defined terms of the investment. <br/><br/>
</div></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><div><br/><Icon className={classes.iconHover} color="grey" style={{ fontSize: 50 }}>
          assignment</Icon></div>
<h1>De-Risk</h1>
<div style={{padding: 30 }}>InvestInMe uses machine learning and neural networks to quantify potential return on investment by aggregating public data and salary trends with student profiles. InvestInMe also suggests students with similarities to the investor such as university alumni or profession, helping the investor to gain greater understanding of the opportunity.
</div></Paper>
        </Grid>
        </Grid>
    </div>
  );
}