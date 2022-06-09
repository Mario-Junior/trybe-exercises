// Para os testes, toda a estrutura anterior (aqui comentada) foi para o app.js
/* 
const express = require('express');
// const bodyParser = require('body-parser');
const routes = require('./routes');

// Importo a função que valida se o usuário está ou não autenticado
const validateJWT = require('./auth/validateJWT');

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const apiRoutes = express.Router();

apiRoutes.get('/api/posts', validateJWT, routes.getPosts);
apiRoutes.post('/api/users', routes.createUsers);
apiRoutes.get('/api/users', routes.getUsers);
apiRoutes.post('/api/login', routes.login);

app.use(apiRoutes);
*/
const app = require('./app');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));
