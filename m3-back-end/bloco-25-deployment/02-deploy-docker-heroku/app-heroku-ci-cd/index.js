const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send(`<h1> Executando na porta: ${port} </h1>`));
app.listen(port, () => console.log(`Online: ${port}`));
