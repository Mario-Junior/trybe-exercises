const express = require('express');

const rescue = require('express-rescue');

const Author = require('./controllers/Authors');

const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(express.json());

app.post('/authors', rescue(Author.createAuthor));

app.get('/authors', rescue(Author.getAll));

app.get('/authors', rescue(Author.findByName));

app.get('/authors/:id', rescue(Author.findById));

app.use(errorMiddleware);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
