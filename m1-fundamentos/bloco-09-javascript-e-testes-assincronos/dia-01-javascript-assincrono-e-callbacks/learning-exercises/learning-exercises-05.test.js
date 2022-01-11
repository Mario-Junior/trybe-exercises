//* Bloco 09 - Dia 01 *//
//* Setup e Teardown *//
// Códigos para entendimento
// cicles.test.js
let cities = [];

const addCity = (city) => {
  cities.push(city);
};

const removeCity = (city) => {
  cities = cities.filter((eachCity) => eachCity !== city);
};
