import React, { Component } from 'react';
import './Form.css';
import AprendizadoFavorito from './AprendizadoFavorito';
import Checkbox from './Checkbox';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      aprendizadoFavorito: '',
      nome: '',
      email: '',
      aprendizados: '',
      queroMais: false,
      enviaFoto: '',
      formularioComErros: true,
    };
  }

  handleErro() {
    const { aprendizadoFavorito, aprendizados, email, enviaFoto, nome, queroMais } = this.state;

    const errorCases = [
      aprendizadoFavorito === '',
      !nome.length,
      !email.match(/^\S+@\S+$/i),
      !aprendizados.length,
      queroMais === false,
      enviaFoto === '',
    ];

    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchido,
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => { this.handleErro(); });
  }

  render () {
    const { nome, email, aprendizados, enviaFoto } = this.state;
    const { handleChange } = this;
    return (
      <main>
        <h1>Estudando Formulários em React - Exercício de aprendizado</h1>
        <form className="form">
          <AprendizadoFavorito value={this.state.aprendizadoFavorito} handleChange={this.handleChange} />
          <fieldset>
          <legend>Insira os dados solicitados</legend>
          <label>
            Seu nome aqui: 
            <input
              type="name"
              name="nome"
              value={nome}
              onChange={handleChange}
            />
          </label>
          <label>
            Seu e-mail aqui: 
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>
          <label>
            Diga mais sobre seus aprendizados até aqui: 
            <textarea
              name="aprendizados"
              value={aprendizados}
              onChange={handleChange}
            />
          </label>
          </fieldset>
          <Checkbox value={this.state.queroMais} handleChange={this.handleChange} />
          <label id="ult">
            Mande uma foto que represente você com a TRYBE: 
            <input
              type="file"
              name="enviaFoto"
              value={enviaFoto}
              onChange={handleChange}
            />
          </label>
        </form>
      </main>
    )
  }
}

export default Form;
