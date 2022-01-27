import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

  }

  render () {
    return (
      <>
        <h1>Estudando Formulários em React - Exercício de aprendizado</h1>
        <form className='form'>
          <label>
            Escolha seu aprendizado favorito até aqui:
            <select name='aprendizadoFavorito'>
              <option value='html'>HTML</option>
              <option value='css'>CSS</option>
              <option value='javascript'>JavaScript</option>
              <option value='react'>React</option>
            </select>
          </label>
          
        </form>
      </>
    )
  }
}

export default Form;
