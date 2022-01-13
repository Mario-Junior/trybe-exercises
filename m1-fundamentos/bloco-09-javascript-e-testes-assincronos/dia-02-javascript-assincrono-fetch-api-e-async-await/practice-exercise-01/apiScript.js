// Exercício Prático 01
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const object = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL, object)
    .then(response => response.json())
    .then(data => console.log(data));
};

window.onload = () => fetchJoke();
