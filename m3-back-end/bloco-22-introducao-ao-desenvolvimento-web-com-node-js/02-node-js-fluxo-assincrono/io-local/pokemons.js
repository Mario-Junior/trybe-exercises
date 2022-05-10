const axios = require('axios');

const getPokemonById = async (id) => {
const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

return response.data;
}

async function main() {
const promises = [];
for (let i = 1; i < 50; i++) {
const promise = getPokemonById(i);
promises.push(promise);
//console.log(`Pokemon: ${pokemon.name}`);
}

const pokemons = await Promise.all(promises);
pokemons.forEach( pokemon => console.log(`Pokemon: ${pokemon.name}`));
}

main();
