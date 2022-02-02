import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <h1>Meu App React - Treinando React Router Dom</h1>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </BrowserRouter>
    );
  }
}

export default App;
