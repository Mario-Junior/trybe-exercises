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

  if (movie.length === 0) return null;

  const { title, directedBy, releaseYear } = movie[0];

  return { id, title, directedBy, releaseYear };
};

module.exports = {
  create,
  findById,
};
