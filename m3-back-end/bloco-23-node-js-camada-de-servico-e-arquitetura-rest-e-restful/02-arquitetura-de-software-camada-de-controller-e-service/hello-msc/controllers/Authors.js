// controllers/Authors.js

const Author = require('../services/Authors');

const getAll = async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
};

const findById = async (req, res, next) => {
  const { id } = req.params;

  const author = await Author.findById(id);
  console.log(author);

  if (author.error) return next(author.error); // Entender como fazer pra aparecer o objeto de erro!!!

  res.status(200).json(author);
};

const createAuthor = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  const author = await Author.createAuthor(first_name, middle_name, last_name);

  if (!author) return res.status(400).json({ message: 'Invalid data!' });

  res.status(201).json(author);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};
