import React, { Component } from 'react';
import Helmet from 'react-helmet';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import About from './views/About';
import Home from './views/Home';
import NoMatch from './views/NotFound';

const routes = [
  {
    title: 'Home',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    title: 'About',
    path: '/about',
    component: About,
  },
];


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
