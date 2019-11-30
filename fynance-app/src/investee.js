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

class Investee extends React.Component{
    constructor(props){
        super(props);
        this.state = {name: "Loading", id: "5Hs305gPE1", deg:"Loading", emp:"Loading", vol:"Loading", brack:"Loading", uni:"Loading"};
    }
    
    componentDidMount(){
        console.log("mounted");
        var read = DB.read("investee", "5Hs305gPE1");
        read.then(snapshot =>{
            var user = snapshot.val();
            console.log(user);
            var state_copy = this.state;
            state_copy.name = user.Name;
            state_copy.emp = user["Previous Employ"] == "1" ? "Yes" : "No";
            state_copy.vol = user["Volunteering"] == "1" ? "Yes" : "No";
            state_copy.brack = user["Salary Bracket"];
            state_copy.uni = "The University of Melbourne";

            var degs = [user.B_Com, user.B_Sc, user.JD, user.M_Eng];
            var deg = "None";

            if(degs[0] == "1"){
                deg = "Bachelor of Commerce";
            }
            else if(degs[1] == "1"){
                deg = "Bachelor of Science";
            }
            else if(degs[2] == "1"){
                deg = "Juris Doctor";
            }
            else if(degs[3] == "1"){
                deg = "Master of Engineering";
            }

            state_copy.deg = deg
            
            this.setState(state_copy);
        });
    }

    render(){

        return (
            <div>
                {/* <Paper className={useStyles().paper}>*/}
                <Paper>
                    <Grid container spacing={2}>
                        <Grid item>
                            {/* <ButtonBase className={useStyles().image}> */}
                            <ButtonBase>
                                <Avatar />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <h1>
                                        {this.state.name}
                                    </h1>
                                    <ul>
                                        <li><b>University: </b>{this.state.uni}</li>
                                        <li><b>Degree: </b>{this.state.deg}</li>
                                        <li><b>Previous Employment: </b>{this.state.emp}</li>
                                        <li><b>Volunteering Work: </b>{this.state.vol}</li>
                                        <li><b>Estimated Salary Bracket: </b>{this.state.brack}</li>
                                    </ul>
                                    {/* <Typography variant="body2" gutterBottom>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </Typography> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
      );
    }

}

// function Investee() {
//     const classes = useStyles();
//     // define a user ID here, get data from firebase, input and add additional headers/bodies
//     // Ask how to get async data - await?
//     // DB.read("investee", "demo")

    
//     var read = DB.read("investee", "demo")
//     var name = "Loading Name";

//     const component = (
//         <div id='user' className={classes.root}>
//           <Paper className={classes.paper}>
//             <Grid container spacing={2}>
//               <Grid item>
//                 <ButtonBase className={classes.image}>
//                     <Avatar/>
//                 </ButtonBase>
//               </Grid>
//               <Grid item xs={12} sm container>
//                 <Grid item xs container direction="column" spacing={2}>
//                   <Grid item xs>
//                     <h1>
//                       {name}
//                     </h1>
//                     <Typography variant="body2" gutterBottom>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                     </Typography>
//                     {/* <Typography variant="body2" color="textSecondary">
//                     </Typography> */}
//                   </Grid>
//                   <Grid item>
//                     <Typography variant="body2" style={{ cursor: 'pointer' }}>
//                       Remove
//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Paper>
//         </div>
//       );

//     read.then(snapshot => {
//         var user = snapshot.val();
//         name = user.Name;
//         console.log(name)
//         ReactDOM.render(component, document.getElementById('user'));
//     })

//     return component;

    // var user = await DB.read("investee", "demo");

    // var name = user.first + " " + user.last;


//   return (
//     <div className={classes.root}>
//       <Paper className={classes.paper}>
//         <Grid container spacing={2}>
//           <Grid item>
//             <ButtonBase className={classes.image}>
//                 <Avatar/>
//             </ButtonBase>
//           </Grid>
//           <Grid item xs={12} sm container>
//             <Grid item xs container direction="column" spacing={2}>
//               <Grid item xs>
//                 <h1>
//                   NAME - GET FROM FIREBASE
//                 </h1>
//                 <Typography variant="body2" gutterBottom>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                 </Typography>
//                 {/* <Typography variant="body2" color="textSecondary">
//                 </Typography> */}
//               </Grid>
//               <Grid item>
//                 <Typography variant="body2" style={{ cursor: 'pointer' }}>
//                   Remove
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Paper>
//     </div>
//   );
// }

export default Investee;