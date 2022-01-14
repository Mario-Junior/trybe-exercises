//* Fetch API *//
// Gestores de fluxo
// Código que roda mas imprime Promise { <pending> } no console.log, pois o fluxo assíncrono não está sendo controlado
const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  console.log(fetch(url));
}
fetchJoke();

// Código com a sintaxe correta, com encadeamento (chaining) de .then() que faz com que o fluxo fique controlado
const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value));
}
fetchJoke();

// Adicionando .catch() ao código para tratar possíveis erros 
// * Para forçar um erro, foi retirado o https:// do início da url
const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}
fetchJoke(); // Algo deu errado :( // TypeError: Only absolute URLs are supported
