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
}
    
module.exports = {
  getAll,
  getByAuthorId,
};
