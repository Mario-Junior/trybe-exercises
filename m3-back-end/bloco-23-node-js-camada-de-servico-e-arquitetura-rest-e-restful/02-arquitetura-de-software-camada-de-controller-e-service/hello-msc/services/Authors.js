// services/Authors.js

const Author = require('../models/Author');

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const getAll = async () => await Author.getAll();

const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: `Author not found by id ${id}`,
      },
    };
  }
  return author;
};

const createAuthor = async (firstName, middleName, lastName) => {
  const validAuthor = isValid(firstName, middleName, lastName);

  if (!validAuthor) return { message: 'Invalid data!' };

  const existingAuthor = await Author.findByName(firstName, middleName, lastName);

  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Author with this fullname already exists',
      },
    };
  }
  return await Author.createAuthor(firstName, middleName, lastName);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};
