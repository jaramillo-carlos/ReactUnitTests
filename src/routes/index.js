import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import FourOFour from '../pages/FourOFour';
import PrivateRoute from '../components/PrivateRoute';

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/home" component={Home} />
      <Route component={FourOFour} />
    </Switch>
  </Router>
)
