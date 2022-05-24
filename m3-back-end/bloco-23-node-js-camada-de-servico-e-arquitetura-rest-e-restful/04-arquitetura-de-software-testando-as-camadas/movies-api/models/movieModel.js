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

module.exports = {
  create,
};
