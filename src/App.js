import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import MyCities from './components/my-cities';
import NoMatch from './components/404';
import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <nav>navbar</nav>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home}/>
            <Route path="/my-cities" component={MyCities}/>
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
