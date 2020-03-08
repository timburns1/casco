import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Products } from './Products';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import Jumbotron from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/Home" component={Home} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Products" component={Products} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>

      </React.Fragment>
    );
  }
}

export default App;
