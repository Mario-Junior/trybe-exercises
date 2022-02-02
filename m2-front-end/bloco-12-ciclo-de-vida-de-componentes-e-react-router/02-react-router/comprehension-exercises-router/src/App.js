import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <h1>Meu App React - Treinando React Router Dom</h1>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/users" component={Users}/>
      </BrowserRouter>
    );
  }
}

export default App;
