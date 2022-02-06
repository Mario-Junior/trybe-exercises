import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <h1>Meu App React - Treinando React Router Dom</h1>
        <nav>
          <li><Link to="/" > Home </Link></li>
          <li><Link to="/about" > About </Link></li>
          <li><Link to="/users" > Users </Link></li>
        </nav>
        <Switch>
          <Route path="/users/:id" render={(props) =>
            <Users {...props} greetingsMessage="Hello"/>}
          />
          <Route path="/about" component={About}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
