import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import User from './Components/User';
import Search from './Components/Search';
import Alert from './Components/Alert';
import About from './Components/About';
import Home from './Components/Home';
import NotFound from './Components/NotFound';

import GitHubState from './Context/gitHub/GitHubState';
import AlertState from './Context/Alert/alertState';
const App = () => {
    return (
      <GitHubState>
        <AlertState>
        <Router>
          <div className="ui container">
            <Header />
            <div style={{marginTop: '2rem'}} >
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
        </AlertState>
      </GitHubState>

    );
}

export default App;
