// Exercício Prático 02
// const fetch = require('node-fetch');

const fetchCriptos = async () => {
  const apiUrl = 'https://api.coincap.io/v2/assets';
  
  const coinsArr = await fetch(apiUrl)
    .then(response => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());
  return coinsArr;
};

const showCoins = async () => {
  const coins = await fetchCriptos();
  const coinsList = document.getElementById('cripto-list');

  coins.forEach(coin => {
    const newLi = document.createElement('li');
    const usdPrice = Number(coin.priceUsd);

    newLi.innerText = `${coin.name} (${coin.symbol}): USD ${usdPrice.toFixed(2)}`;
    coinsList.appendChild(newLi);
  });
}

window.onload = () => showCoins();
