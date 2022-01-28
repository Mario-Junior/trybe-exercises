import { Component } from "react";
import './pokemon.css'
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className="pokemon">
          <div className="card">
            <h2>{ name }</h2>
            <p>{ type }</p>
            <p>
              { `Average weight: ${ averageWeight.value } ${ averageWeight.measurementUnit }` }
            </p>
          </div>
          <img src={ image } alt={ `Pokemon ${ name } sprite` }/>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
