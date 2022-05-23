const fetch = require('node-fetch');

// Armazeno o token numa variável.
// Num ambiente real, esse valor viria do Local Storage, ou de uma variável de ambiente

const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

// Crio um novo objeto de Headers
const headers = new fetch.Headers({
  Authorization: API_TOKEN});

// Começando com uma requisição tipo GET // Passo o objeto headers como parâmetro para o fetch
fetch('https://postman-echo.com/get?param1=teste', { headers })
  .then((response) => {
    // Ao receber a resposta, verifica se correu tudo certo
    if (!response.ok) {
      // Caso não, força a Promise a ser rejeitada
      return Promise.reject(response);
    }
    // Caso tudo ok, lê o body como JSON
    return response.json();
  })
  .then((data) => {
    // Escreve o body no console
    console.log(data);
  })
  .catch((errorOrResponse) => {
    // Em caso de falha simples (request completa com status diferente de 2XX), loga-se o status no console
    if (errorOrResponse.status) {
      return console.error(`Request failed with status ${errorOrResponse.status}`);
    }
    // Caso ocorra erro de rede (não possível completar a request), loga-se o erro todo!
    console.error(errorOrResponse);
  });
