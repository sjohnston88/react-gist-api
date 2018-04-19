import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import App from '../App/index';

class SiteRoutes extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:username" component={App} />
          <Redirect from='/' to='/defunkt' />
        </Switch>
      </Router>
    );
  }
}

export default SiteRoutes;
