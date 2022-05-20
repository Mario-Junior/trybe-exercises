const express = require('express');

const Author = require('./controllers/Authors');

const app = express();

app.use(express.json());

app.post('/authors', Author.createAuthor);

app.get('/authors', Author.getAll);

app.get('/authors/:id', Author.findById);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
