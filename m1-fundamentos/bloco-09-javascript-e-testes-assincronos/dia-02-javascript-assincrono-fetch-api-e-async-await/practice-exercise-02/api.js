// Exercício Prático 02
const fetch = require('node-fetch');

const fetchCriptos = async () => {
  const apiUrl = 'https://api.coincap.io/v2/assets';
  
  const coinsArr = await fetch(apiUrl)
    .then(response => response.json())
    .then((data) => data.data)
    .catch((error) => console.log(error));

    console.log(coinsArr);
};
fetchCriptos();
