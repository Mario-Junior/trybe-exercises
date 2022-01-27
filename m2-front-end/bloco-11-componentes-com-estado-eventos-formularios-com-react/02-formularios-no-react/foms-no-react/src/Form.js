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
    const { aprendizadoFavorito, nome, email, aprendizados } = this.state;
    const { handleChange } = this;
    return (
      <>
        <h1>Estudando Formulários em React - Exercício de aprendizado</h1>
        <form className="form">
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
            Diga mais sobre seus aprendizados até aqui!
            <textarea
              name="aprendizados"
              value={aprendizados}
              onChange={handleChange}
            />
          </label>
        </form>
      </>
    )
  }
}

export default Form;
