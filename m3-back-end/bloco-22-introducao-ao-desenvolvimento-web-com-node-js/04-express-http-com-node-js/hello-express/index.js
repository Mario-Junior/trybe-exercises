const express = require('express');

// 1. Cria uma nova aplicação Express;
const app = express();

// 2. Diz ao Express que, quando uma requisição com método GET for recebida no caminho /hello, a função handleHelloWorldRequest deve ser chamada;
app.get('/hello', handleHelloWorldRequest);

// 3. Pede ao Express que crie um servidor HTTP e escute por requisições na porta 3001;
app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

// 4. Trata a requisição com método GET no caminho /hello, envia o status HTTP 200 que significa OK e a mensagem 'Hello World!'
function handleHelloWorldRequest(_req, res) {
  res.status(200).send('Hello World run dev 2!');  
};
