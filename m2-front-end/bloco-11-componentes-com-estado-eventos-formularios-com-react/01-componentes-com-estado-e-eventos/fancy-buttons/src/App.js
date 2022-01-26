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
// Descomente da linha 32 até a linha 52 para ver)
// class App extends Component {
//   handleClick() {
//     console.log('Clicou no botão!');
//     console.log(this);
//   } ; // esta chamada ao 'this' retorna 'undefined'
//   handleOnMouseOver = () => console.log('Passou o mouse aqui, hein! ;D e acessou o `this`', this);
//   // 💡 Se você definir uma função da classe com uma arrow function, com a sintaxe minhaFuncao = () => {...} , você não precisará fazer o bind no constructor, mas sua aplicação será menos performática! Se quiser ler mais a respeito, busque o texto "Binding vs arrow-function (for react onClick event)" nos Recursos Adicionais!
//   handleOnLoadFocus = () => console.log('Oh o foco aqui em mim! XD');
  
//   render () {
    
//     return (
//       <>
//         <h3>Abra o console log para ver os resultados de cada botão</h3>
//         <button onClick={this.handleClick}>Meu botão 1</button>
//         <button onMouseOver={this.handleOnMouseOver}>Meu botão 2</button>
//         <button onFocus={this.handleOnLoadFocus} autoFocus>Meu botão 3</button>
//       </>
//     ) 
//   }
// }

// Refatoração 2 ( constructor() super() bind(this) ) = abrimos acesso ao this (com suas props, state, etc.) nas funções do componente
// Descomente da linha 56 até a linha 80 para ver)
// class App extends Component {
//   constructor() {
//     super()
    
//     this.handleClick = this.handleClick.bind(this);
//     this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
//     this.handleOnLoadFocus = this.handleOnLoadFocus.bind(this);
//   }
  
//   handleClick = () => console.log('Clicou no botão! E chamou o `this`', this);
//   handleOnMouseOver = () => console.log('Passou o mouse aqui, hein! ;D');
//   handleOnLoadFocus = () => console.log('Oh o foco aqui em mim! XD');
  
//   render () {
//     console.log(this);
//     return (
//       <>
//         <h3>Abra o console log para ver os resultados de cada botão</h3>
//         <button onClick={this.handleClick}>Meu botão 1</button>
//         <button onMouseOver={this.handleOnMouseOver}>Meu botão 2</button>
//         <button onFocus={this.handleOnLoadFocus} autoFocus>Meu botão 3</button>
//       </>
//     ) 
//   }
// }

// Refatoração 3 = Incluindo estado (state e setState)
// Descomente da linha  até a linha  para ver)
class App extends Component {
  constructor() {
    super()
    
    this.handleClick = this.handleClick.bind(this);
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
    this.handleOnLoadFocus = this.handleOnLoadFocus.bind(this);
    this.state = {
      clicksNumber: 0
    }
  }
  
  handleClick() {
    this.setState((previousState, _props) => ({
      clicksNumber: previousState.clicksNumber + 1
    }))
    console.log('Clicou no botão! E chamou o `this`', this)
  };
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
