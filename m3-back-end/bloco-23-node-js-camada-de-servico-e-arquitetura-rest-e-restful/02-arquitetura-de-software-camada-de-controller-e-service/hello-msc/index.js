const express = require('express');

const Author = require('./models/Author');

const app = express();

app.use(express.json());

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Invalid data!' });
  }

  await Author.createAuthor(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Author successfully created!' });
});

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  
  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Author Not found' });

  res.status(200).json(author);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
