const express = require('express');

const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();
app.use(express.json());

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Invalid data!'});
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Author successfully created!'});
});

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Author Not found!'});

  res.status(200).json(author);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if (!Book.isValid(title, author_id)) {
    return res.status(400).json({ message: 'Invalid data!' });
  }

  await Book.create(title, author_id);

  res.status(201).json({ message: 'Book successfully created!'});
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  
  const book = await Book.findById(id);

  if (!book) return res.status(404).json({ message: 'Book Not found!'});

  res.status(200).json(book);
});

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = (author_id)
  ? await Book.getByAuthorId(author_id)
  : await Book.getAll();

  res.status(200).json(books);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo a porta ${PORT}`);
});
