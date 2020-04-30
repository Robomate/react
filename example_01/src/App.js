import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import About from './components/About';
import Info from './components/Info';
import { Contact } from './components/Contact';
import { NoMatch } from './components/NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
// import { Jumbotron } from './components/Jumbotron';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
        <header className="App-header">
          <h4 className="App-title">H</h4>
        </header> 
          <NavigationBar />
          <br/>
          {/* <Jumbotron /> */}
          <Layout>
            <Switch>
              <Route exact path="/components/home" component={Home} />
              <Route path="/components/about" component={About} />
              <Route path="/components/contact" component={Contact} />
              <Route path="/components/info" component={Info} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
