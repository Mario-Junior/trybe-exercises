import React, { Component } from 'react';
import './App.css';

// Para fixar
// 1 - Crie uma aplicação React com npx create-react-app fancy-buttons . Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log() . Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!!
// 2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log() .
// 3 - Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!
// 4 - Garanta acesso ao objeto this na função que você declarou.
// 5 - Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão! Primeiramente, defina um estado inicial para a contagem de cada botão.
// Dica: Uma possibilidade é você definir três chaves, uma para cada botão!
// 6 - Agora, quando um botão for clicado, altere de forma assíncrona o estado deste botão de zero para um.
// 7 - Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!


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
// Descomente da linha 95 até a linha 138 para ver)
class App extends Component {
  constructor() {
    super()
    
    this.handleClick = this.handleClick.bind(this);
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
    this.handleOnLoadFocus = this.handleOnLoadFocus.bind(this);
    this.state = {
      clicksNumber: 0,
      overNumber: 0,
      focusNumber: 0,
    }
  }
  
  handleClick() {
    this.setState((previousState, _props) => ({
      clicksNumber: previousState.clicksNumber + 1
    }))
    console.log('Clicou no botão! E chamou o `this`', this);
  };
  handleOnMouseOver() {
    this.setState((previousState, _props) => ({
      overNumber: previousState.overNumber + 1
    }))
    console.log('Passou o mouse aqui, hein! ;D');
  };
  handleOnLoadFocus() {
    this.setState((previousState, _props) => ({
      focusNumber: previousState.focusNumber + 1
    }))
    console.log('Oh o foco aqui em mim! XD');
  };
    
  render () {
    return (
      <>
        <h3>Abra o Console (F12) para ver os resultados de cada botão</h3>
        <button onClick={this.handleClick}>Clique aqui: {this.state.clicksNumber}</button>
        <button onMouseOver={this.handleOnMouseOver}>Passe o mouse: {this.state.overNumber}</button>
        <button onFocus={this.handleOnLoadFocus} autoFocus>Coloque o foco: {this.state.focusNumber}</button>
      </>
    ) 
  }
}

export default App;
