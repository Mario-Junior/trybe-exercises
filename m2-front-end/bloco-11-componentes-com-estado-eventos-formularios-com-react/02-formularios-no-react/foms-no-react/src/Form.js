import React, { Component } from 'react';
import './Form.css';

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
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render () {
    const { aprendizadoFavorito, nome, email, aprendizados, queroMais, enviaFoto } = this.state;
    const { handleChange } = this;
    return (
      <main>
        <h1>Estudando Formulários em React - Exercício de aprendizado</h1>
        <form className="form">
          <fieldset>
          <legend>Selecione aqui</legend>
          <label>
            Escolha seu aprendizado favorito até aqui: 
            <select
              name="aprendizadoFavorito"
              value={aprendizadoFavorito}
              onChange={handleChange}
            >
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="javascript">JavaScript</option>
              <option value="react">React</option>
            </select>
          </label>
          </fieldset>
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
          <fieldset>
          <legend>Complete o formulário</legend>
          <label>
            Você quer aprender mais com a TRYBE? 
            <input
              type="checkbox"
              name="queroMais"
              value={queroMais}
              onChange={handleChange}
            />
          </label>
          <label>
            Mande uma foto sua que represente você com a TRYBE: 
            <input
              type="file"
              name="enviaFoto"
              value={enviaFoto}
              onChange={handleChange}
            />
          </label>
          </fieldset>
        </form>
      </main>
    )
  }
}

export default Form;
