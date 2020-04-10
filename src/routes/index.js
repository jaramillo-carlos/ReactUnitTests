import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import FourOFour from '../pages/FourOFour';


export default (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
      <Route component={FourOFour} />
    </Switch>
  </Router>
)