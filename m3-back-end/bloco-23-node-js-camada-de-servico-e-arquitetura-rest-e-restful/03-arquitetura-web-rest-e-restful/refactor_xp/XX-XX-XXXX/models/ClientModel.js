const connection = require('./connection');

const getAll = async () => {
  try {
    const [clients] = await connection.query('SELECT * FROM clients_data.clients;');
    return clients;
  } catch (err) {
    console.error(err);
  }
};

const add = async (nome) => {
  try {
    const [newClient] = await connection.query(
      'INSERT INTO clients_data.clients (name) VALUES (?);', [nome]);
    return newClient;
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  getAll,
  add,
};
