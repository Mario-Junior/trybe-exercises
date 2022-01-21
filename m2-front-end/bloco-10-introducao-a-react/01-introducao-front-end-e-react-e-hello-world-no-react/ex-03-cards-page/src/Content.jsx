import React from 'react';
import { Component } from 'react/cjs/react.production.min';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composição de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composição de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    return (
      <div>
        { conteudos.map((conteudo) => (
          <div>
            <h4>{ `Conteúdo: ${conteudo.conteudo}` }</h4>
            <p>{ `Status: ${conteudo.status}` }</p>
            <p>{ `Bloco: ${conteudo.bloco}` }</p>
          </div>
        )) }
      </div>
    );
  }
}

export default Content;
