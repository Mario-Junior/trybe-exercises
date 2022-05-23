// services/Authors.js

const Author = require('../models/Author');
const Contact = require('../models/Contact');

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
        code: 404,
        message: `Author not found by id ${id}`,
      },
    };
  }
  return author;
};

const findByName = async (firstName, middleName, lastName) => {
  const author = await Author.findByName(firstName, middleName, lastName);

  if (!author) {
    return {
      error: {
        code: 404,
        message: `Author not found by this name ${firstName} ${middleName} ${lastName}`,
      },
    };
  }
  return author;
};

const createAuthor = async (firstName, middleName, lastName, contacts) => {
  const validAuthor = isValid(firstName, middleName, lastName);

  if (!validAuthor) return {
    error: {
      code: 400,
      message: 'Invalid data!',
    },
  };

  const existingAuthor = await Author.findByName(firstName, middleName, lastName);

  if (existingAuthor) {
    return {
      error: {
        code: 409,
        message: 'Author with this fullname already exists',
      },
    };
  }
  const { id } = await Author.createAuthor(firstName, middleName, lastName);

  await Promise.all(contacts.map((contact) => Contact.createContact(id, contact)));

  return ({ id, firstName, middleName, lastName, contacts });
};

module.exports = {
  getAll,
  findById,
  findByName,
  createAuthor,
};
