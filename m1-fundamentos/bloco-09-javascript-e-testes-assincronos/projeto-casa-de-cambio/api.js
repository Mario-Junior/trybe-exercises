// const fetch = require('node-fetch');

const fetchCurrency = async (currency) => {
  const response = await fetch(`https://api.exchangerate.host/latest?base=${currency}`);
  const object = await response.json();
  handleRates(object.rates);
  handleBaseCurrency(object.base);

  // return fetch(`https://api.exchangerate.host/latest?base=${currency}`)
  // .then((response) => response.json())
  // .then((object) => {
  //   handleRates(object.rates);
  //   handleBaseCurrency(object.base);
  // })
}
fetchCurrency();

module.exports = {
  fetchCurrency,
};
