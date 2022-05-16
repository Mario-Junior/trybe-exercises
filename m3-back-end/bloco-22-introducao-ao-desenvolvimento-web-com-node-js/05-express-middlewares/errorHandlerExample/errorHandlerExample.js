/* errorHandlerExample.js */
const express = require('express');
const fs = require('fs/promises');

const app = express();

app.get('/', (req, res) => {
  res.send('Estoy aquí!');
});

app.get('/:fileName', async (req, res, next) => {
	try {
		const file = await fs.readFile(`./${req.params.fileName}`);
		res.send(file.toString('utf-8'));
	} catch (e) {
		next(e);
	}
});

app.use(function (err, req, res, next) {
  res.status(500).json({ error: `Erro: ${err.message}` });
});

app.listen(3002, () => {
  console.log('Aplicação ouvindo na porta 3002');
});
