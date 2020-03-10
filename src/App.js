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
import UserStore from './stores/userStore';
import LoginFrom from './logIn';
import inputField from './inputField';
import SubmitButton from './components/SubmitButton';

class App extends Component {
  async componentDidMount() {
    try {

      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json ',
          'Content-type': 'application/json'
        }
      });

      let result = await res.json();

      if (result && result.success) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }

      else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;

      }

    }

    catch (e) {

      UserStore.loading = false;
      UserStore.isLoggedIn = false;


    }
  }


  render() {
    return (<React.Fragment >
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