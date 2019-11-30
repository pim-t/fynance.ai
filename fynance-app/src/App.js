import React from 'react';
import logo from './logo.svg';
import './App.css';
import DB from './Database';

import Home from './home';
import Investee from './investee';
import Investor from './investor';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    
    <Router>
     <div>
      <MenuButton />
     
    {/* //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">Investor</Link>
    //       </li>
    //       <li>
    //         <Link to="/users">Users</Link>
    //       </li>
    //     </ul>
    //   </nav> */}

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/investor">
          <Investor />
        </Route>
        <Route path="/investee">
          <Investee />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  
  );
}


class MenuButton extends React.Component {
  constructor () {
    super();
    this.state = {
      active: false
    }
  }
  
  componentDidMount () {
    if (this.props.active) {
      this.setState({
        active: true
      });
    }
  }
  
  toggle () {
    this.setState({
      active: !this.state.active
    });
  }
  
  render () {
    const classes = this.state.active ? 'menu-button active' : 'menu-button';

    return (
      <button className={classes} onClick={this.toggle.bind(this)}>
        <span className='bar'></span>
      </button>
    );
  }
}

export default App;
