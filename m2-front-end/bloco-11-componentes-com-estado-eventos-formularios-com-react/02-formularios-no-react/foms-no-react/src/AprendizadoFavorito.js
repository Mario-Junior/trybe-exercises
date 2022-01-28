import React, { Component } from 'react';

class AprendizadoFavorito extends Component {
  render() {
    const { value, handleChange } = this.props;

    let error = '';
    if(value === '' || value === 'selecione') error = 'Este campo é obrigatório. Escolha uma opção!';
    
    return (
      <fieldset>
      <legend>Selecione aqui</legend>
      <label>
        Escolha seu aprendizado favorito até aqui: 
        <select
          name="aprendizadoFavorito"
          value={value}
          onChange={handleChange}
        >
          <option value="selecione">Selecione</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">JavaScript</option>
          <option value="react">React</option>
        </select>
        <span>{error}</span>
      </label>
      </fieldset>
    )
  }
}

export default AprendizadoFavorito;
