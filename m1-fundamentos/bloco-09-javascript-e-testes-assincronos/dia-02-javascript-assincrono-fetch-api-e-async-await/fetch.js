//* Fetch API *//
// Gestores de fluxo
// Código que roda mas imprime Promise { <pending> } no console.log, pois o fluxo assíncrono não está sendo controlado
const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  console.log(fetch(url));
}
fetchJoke();

