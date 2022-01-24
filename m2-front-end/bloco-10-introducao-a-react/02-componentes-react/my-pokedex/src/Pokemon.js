import { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;
    return (
      <div className="pokemon">
          <div className="card">
            <h2>{ name }</h2>
            <p>{ type }</p>
            <p>{ `Average weight: ${ averageWeight.value } ${ averageWeight.measurementUnit }` }</p>
          </div>
          <img src={ image } alt={ `Pokemon ${ name } sprite` }/>
      </div>
    );
  }
}

Pokemon.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default Pokemon;
