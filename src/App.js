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
import LoginPage from './loginPage';

class App extends Component {

  state = {
    authenticated: false,
  }


  render() {


    return (<React.Fragment>
      <Router>
        <NavigationBar auth={this.state.authenticated} />
        {/* <Jumbotron /> */}
        <Layout>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/products" component={Products} />
            <Route excact path="/login" component={LoginPage} />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
      </Router>

    </React.Fragment>
    );
  }
}

export default App;