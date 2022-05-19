const connection = require('../db');

const getAll = () => {
  return connection.execute('SELECT * FROM comics.characters');
};

module.exports = {
  getAll,
};
