const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const [result] = await connection.execute(
    'INSERT INTO movies_db.movies (title, directed_by, release_year) VALUES (?, ?, ?);',
    [title, directedBy, releaseYear],
  );
  return {
    id: result.insertId,
  };
};

const findById = async (id) => {
  const [movie] = await connection.execute(
    'SELECT * FROM movies_db.movies WHERE id = ?;', [id]);
  return movie;
};

module.exports = {
  create,
  findById,
};
