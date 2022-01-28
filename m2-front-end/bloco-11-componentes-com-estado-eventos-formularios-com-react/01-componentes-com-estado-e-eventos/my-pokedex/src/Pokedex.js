import { Component } from "react";
import './pokedex.css';
import Pokemon from "./Pokemon";
import Button from "./Button";

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
      return (
        <div className="pokedex">
          { pokemons.map(pokemon => <Pokemon key={ pokemon.id } pokemon={ pokemon } />) }
        </div>
      );
  }
}

export default Pokedex;
