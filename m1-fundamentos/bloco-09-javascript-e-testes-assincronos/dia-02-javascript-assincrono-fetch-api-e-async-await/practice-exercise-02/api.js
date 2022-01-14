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

// // Console para printar aqui no VSCode (com a fetch require ativa) o resultado da função fetchCriptos
// const jsCoins = async () => {
//   const coins = await fetchCriptos();
//   console.log(coins);
// }
// jsCoins();

// Bônus:
const fetchUsdCurrencies = async () => {
  const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
  const usdEndpoint = '/currencies/usd.min.json'
  const url = baseUrl.concat(usdEndpoint);

  const usdCurrencies = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.usd)
    .catch((error) => error.toString());

  return usdCurrencies;
};

const showCoins = async () => {
  const coins = await fetchCriptos();
  const usdCurrencies = await fetchUsdCurrencies();
  const coinsList = document.getElementById('cripto-list');

  coins
    // .filter((coin) => coin.rank <= 10) // Solução 1 (aqui filtramos pela propriedade rank dos objetos de cada coin)
    .filter((_, index) => index < 10) // Solução 2 (aqui pegamos as 10 primeiras já pelo index que a HOF filter tem 'de fábrica')
    .forEach(coin => {
      const newLi = document.createElement('li');
      const usdPrice = Number(coin.priceUsd);
      const brlPrice = usdPrice * usdCurrencies.brl;

      newLi.innerText = `${coin.name} (${coin.symbol}): USD ${usdPrice.toFixed(2)} | BRL ${brlPrice.toFixed(2)}`;
      coinsList.appendChild(newLi);
    });
}

window.onload = () => showCoins();
