import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    const { value, handleChange } = this.props;

    let error = '';
    if(value === false) error = 'Este campo é obrigatório. Escolha uma opção!';
    
    return (
      <fieldset>
      <legend>Complete o formulário</legend>
      <label>
        Você quer aprender mais com a TRYBE? 
        <input
          type="checkbox"
          name="queroMais"
          value={value}
          onChange={handleChange}
        />
        <p>{error}</p>
      </label>
      </fieldset>
    )
  }
}

export default Checkbox;
