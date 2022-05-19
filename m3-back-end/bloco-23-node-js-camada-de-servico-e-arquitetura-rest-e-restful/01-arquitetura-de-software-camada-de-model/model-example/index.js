const express = require('express');

const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/books/search', async (req, res) => {
  const { id } = req.query;

  const books = await Book.getByAuthorId(id);

  res.status(200).json(books);
});

app.get('/books', async (_req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo a porta ${PORT}`);
});
