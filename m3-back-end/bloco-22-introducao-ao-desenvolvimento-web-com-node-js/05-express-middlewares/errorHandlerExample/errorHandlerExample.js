// Versão 1 - básica
// const express = require('express');
// const fs = require('fs/promises');

// const app = express();

// app.get('/', (req, res) => {
//   res.send('Estoy aquí!');
// });

// app.get('/:fileName', async (req, res, next) => {
// 	try {
// 		const file = await fs.readFile(`./${req.params.fileName}`);
// 		res.send(file.toString('utf-8'));
// 	} catch (e) {
// 		next(e);
// 	}
// });

// app.use(function (err, req, res, next) {
//   res.status(500).json({ error: `Erro: ${err.message}` });
// });

// app.listen(3002, () => {
//   console.log('Aplicação ouvindo na porta 3002');
// });

// Versão 2 - com express-rescue
const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs/promises');

const app = express();

app.get(
  '/:fileName',
  rescue(async (req, res) => {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf-8'));
  })
);

app.use((err, req, res, next) => {
  res.status(500).json({ error: `Erro: ${err.message}` });
});

app.listen(3002, () => {
  console.log('Aplicação ouvindo na porta 3002');
});
