// const fetch = require('node-fetch');

const fetchCurrency = (currency) => {
  return fetch(`https://api.exchangerate.host/latest?base=${currency}`)
  .then((response) => response.json())
  .then((object) => {
    handleRates(object.rates);
    handleBaseCurrency(object.base);
  })
}
fetchCurrency();

module.exports = {
  fetchCurrency,
};
