import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;

// 1. Qual o nome do componente declarado acima?
// R: O componente acima declarado chama-se 'Image'.
