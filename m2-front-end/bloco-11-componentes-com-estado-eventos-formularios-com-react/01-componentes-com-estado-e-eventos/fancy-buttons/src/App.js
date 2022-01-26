import React, { Component } from 'react';
import './App.css';

// Versão 1 (Descomente da linha 5 até a linha 28 para ver)
// /* Embora isso funcione, essa DEFINITIVAMENTE
// não é a maneira correta de se criar eventos
// em React! A função se refere ao componente,
// então deve ser parte de sua classe! */
// const handleClick = () => console.log('Clicou no botão!');
// const handleOnMouseOver = () => console.log('Passou o mouse aqui, hein! ;D');
// const handleOnLoadFocus = () => console.log('Oh o foco aqui em mim! XD');

// class App extends Component {
//   /* Repare que, diferentemente do HTML, no
//   JSX você associa uma função a um evento
//   passando a própria função entre chaves `{}` */
//   render () {
    
//     return (
//       <>
//         <h3>Abra o console log para ver os resultados de cada botão</h3>
//         <button onClick={handleClick}>Meu botão 1</button>
//         <button onMouseOver={handleOnMouseOver}>Meu botão 2</button>
//         <button onFocus={handleOnLoadFocus} autoFocus>Meu botão 3</button>
//       </>
//     ) 
//   }
// }

// Refatoração 1 (this) = as funções passam a existirem apenas no contexto do Componente
// Descomente da linha 32 até a linha 48 para ver)
class App extends Component {
  handleClick = () => console.log('Clicou no botão!');
  handleOnMouseOver = () => console.log('Passou o mouse aqui, hein! ;D');
  handleOnLoadFocus = () => console.log('Oh o foco aqui em mim! XD');
  
  render () {
    
    return (
      <>
        <h3>Abra o console log para ver os resultados de cada botão</h3>
        <button onClick={this.handleClick}>Meu botão 1</button>
        <button onMouseOver={this.handleOnMouseOver}>Meu botão 2</button>
        <button onFocus={this.handleOnLoadFocus} autoFocus>Meu botão 3</button>
      </>
    ) 
  }
}

export default App;
