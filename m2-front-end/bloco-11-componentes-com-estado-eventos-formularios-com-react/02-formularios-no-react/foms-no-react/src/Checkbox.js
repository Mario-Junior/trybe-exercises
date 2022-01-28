import React, { Component } from 'react';
import './Form.css';

class Checkbox extends Component {
  render() {
    const { value, handleChange } = this.props;

    let error = '';
    if(value === false) error = 'Este campo é obrigatório. Marque-o para prosseguir!';
    
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
        <span>{error}</span>
      </label>
      </fieldset>
    )
  }
}

export default Checkbox;
