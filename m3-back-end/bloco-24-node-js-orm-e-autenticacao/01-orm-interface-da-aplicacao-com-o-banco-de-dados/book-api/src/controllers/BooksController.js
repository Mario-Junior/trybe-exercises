const express = require('express');
const router = express.Router();
const { getAll, getById } = require('../services/BooksService');

router.get('/', async (_req, res) => {
  try {
    const books = await getAll();

    return res.status(200).json(books);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Error!' });
  };
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await getById(id);

    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Error!' });
  };
});

module.exports = router;
