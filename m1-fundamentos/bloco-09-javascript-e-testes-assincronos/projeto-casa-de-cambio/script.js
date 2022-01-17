const setupEventHandlers = () => {
  const searchButton = document.querySelector('#search-button');
  searchButton.addEventListener('click', handleSearchEvent);
}

const handleSearchEvent  = () => {
    const currencyValue = document.querySelector('#currency-input').value;
    fetchCurrency(currencyValue);
    clearList();
}

const handleRates = (rates) => {
  const ratesEntries = Object.entries(rates);
  ratesEntries.forEach(([currency, rates]) => {
    renderRates(currency,rates);
  })
}

const renderRates = (currency, rates) => {
  const currencyList = document.querySelector('#currency-list');
  const li = document.createElement('li');
  li.innerHTML = `${currency}: ${rates.toFixed(6)}`;
  currencyList.appendChild(li);
}

const clearList = () => {
  const currencyList = document.querySelector('#currency-list');
  currencyList.innerHTML = '';
}

const handleBaseCurrency = (currency) => {
  const baseTitle = document.querySelector('#base');
  baseTitle.innerText = `Valores referentes a 1 ${currency}`;
}

setupEventHandlers();
