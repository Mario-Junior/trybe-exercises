const { Book } = require('../models');

const getAll = async () => await Book.findAll();

const getById = async (id) => {
  const book = await Book.findByPk(id);

  if (!book) return null;

  return book;
};

module.exports = {
  getAll,
  getById,
};
