const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books;');
  
  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const getByAuthorId = async (authorId) => {
  const [booksByAuthorId] = await connection.execute(
    `SELECT * FROM model_example.books
    WHERE author_id = ${authorId};`
    // ATENÇÃO!!! assim funciona, mas não é a melhor prática de passar o id!
  );
  return booksByAuthorId.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const findById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id = ?;';
  const [book] = await connection.execute(query, [id]);

  if (book.length === 0) return null;

  return book.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }))[0];
};

const isValid = async (title, authorId) => {
  const [ids] = await connection.execute(
    'SELECT DISTINCT id FROM model_example.authors;');
  const authorsIds = [...ids.map((author) => author.id)];
  console.log(authorsIds.find((authorId) => authorId));

  if (!title || typeof title !== 'string' || title.length < 3) return false;

  if (!authorId || !authorsIds.find((authorId) => authorId)) return false;

  return true;
};
isValid();

const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)',
  [title, authorId],
);

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  isValid,
  create,
};
