const fetch = require('node-fetch');

// Armazeno o token numa variável.
// Num ambiente real, esse valor viria do Local Storage, ou de uma variável de ambiente

const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

// Crio um novo objeto de Headers
const headers = new fetch.Headers({
  Authorization: API_TOKEN,
  // Adicionar o header Content-Type e defini-lo, neste caso, como application/json
  'Content-Type': 'application/json',
});

// Criação do objeto body
// Uso do stringfy para poder enviar o body como JSON
const body = JSON.stringify({
  name: 'Tryber',
  email: 'tryber@betrybe.com',
  password: 'Tr1b3r'});

// Requisição do tipo POST // Troco o método na URL do endpoint e acrescento a chave method no objeto de parâmetros do fecth
fetch('https://postman-echo.com/post?param1=teste', {
  headers,
  method: 'POST',
  // Adiciono a chave body com o objeto body às opções da request
  body,
})
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
