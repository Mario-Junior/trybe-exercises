import React, { Component } from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
const handleClick = () => console.log('Clicou no botão!');
const handleOnMouseOver = () => console.log('Passou o mouse aqui, hein! ;D');
const handleOnLoadFocus = () => console.log('Oh o mouse focado em mim! XD');

class App extends Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render () {
    return (
      <>
        <button onClick={handleClick}>Meu botão 1</button>
        <button onMouseOver={handleOnMouseOver}>Meu botão 2</button>
        <button onFocus={handleOnLoadFocus} autoFocus>Meu botão 3</button>
      </>
    ) 
  }
}

export default App;
