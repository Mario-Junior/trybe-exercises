import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import './App.css';

const tasks = ['14h40 às 16h20 - Conteúdo do dia', '16h20 às 18h00 - Aula ao vivo', '18h30 às 19h20 - Mentorias técnicas', '19h20 às 19h30 - Preenchimento do forms diário', '19h30 às 20h00 - Fechamento'];

const Task = (value) => {
  return (
    <li>{ value }</li>
  );
}

class App extends Component {
  render() {
    return (
      <ul>{ tasks.map(task => Task(task)) }</ul>
    );
  }
}

export default App;
