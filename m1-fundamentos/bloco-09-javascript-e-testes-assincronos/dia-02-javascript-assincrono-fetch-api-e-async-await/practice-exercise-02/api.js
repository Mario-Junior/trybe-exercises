// Exercício Prático 02
const fetch = require('node-fetch');

const apiUrl = 'https://api.coincap.io/v2/assets';

const fetchCriptos = () => {
  fetch(apiUrl)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => console.log(error));
};
fetchCriptos();
