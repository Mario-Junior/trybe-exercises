const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT title FROM model_example.books;',
  );
  return books;
};

const getByAuthorId = async (id) => {
  const [booksByAuthorId] = await connection.execute(
    `SELECT title FROM model_example.books
    WHERE author_id = ${id};`
    // ATENÇÃO!!! assim funciona, mas não é a melhor prática de passar o id!
  );
  return booksByAuthorId;
};

const findById = async (id) => {
  const query = 'SELECT title FROM model_example.books WHERE id = ?;';
  const [bookTitle] = await connection.execute(query, [id]);

  if (bookTitle.length === 0) return null;

  return bookTitle;
};
    
module.exports = {
  getAll,
  getByAuthorId,
  findById,
};
