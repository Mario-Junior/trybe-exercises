const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'mjr',
  password: '$Mjr123456',
  database: 'model_example'
})

module.exports = connection;
