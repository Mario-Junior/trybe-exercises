// models/Author.js

const connection = require('./connection');

// Cria uma string com o nome completo da pessoa autora
// const getNewAuthor = (authorData) => {
//   const { id, firstName, middleName, lastName } = authorData;

//   const fullName = [firstName, middleName, lastName]
//     .filter((name) => name)
//     .join(' ');

//   return {
//     id,
//     firstName,
//     middleName,
//     lastName,
//     name: fullName,
//   };
// };

// Converte o nome dos campos de snake_case para camelCase
// const serialize = (authorData) => authorData.map((item) => getNewAuthor({
//   id: item.id,
//   firstName: item.first_name,
//   middleName: item.middle_name,
//   lastName: item.last_name,
//   }));

// Busca todos os autores do banco.
// E já converte a saída

const getAll = async () => {
  const [authors] = await connection.execute(
    `SELECT 
    id,
    first_name AS fistName,
    middle_name AS middleName,
    last_name AS lastName,
    IF(middle_name IS NOT NULL,
      CONCAT(first_name, " ", middle_name, " ", last_name),
      CONCAT(first_name, " ", last_name)) AS fullName,
    contact
    FROM model_example.authors AS aut
    JOIN model_example.contacts AS cont
    ON aut.id = cont.author_id;`);
  return authors;
};

/*
Busca uma pessoa autora específica, a partir do seu ID
@param {String} id ID da pessoa autora a ser recuperado
*/
const findById = async (id) => {
  const query = `
    SELECT 
    id,
    first_name AS fistName,
    middle_name AS middleName,
    last_name AS lastName,
    IF(middle_name IS NOT NULL,
      CONCAT(first_name, " ", middle_name, " ", last_name),
      CONCAT(first_name, " ", last_name)) AS fullName,
    contact
    FROM model_example.authors AS aut
    JOIN model_example.contacts AS cont
    ON aut.id = cont.author_id
    WHERE id = ?;`;

  const [authorData] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;

  return authorData;
};

const createAuthor = async (firstName, middleName, lastName) => {
  const [author] = await connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
    [firstName, middleName, lastName],
  );
  return ({ id: author.insertId, firstName, middleName, lastName });
};

const findByName = async (firstName, middleName, lastName) => {
  const query1 = `SELECT id, first_name, middle_name, last_name FROM model_example.authors
    WHERE first_name = ? AND middle_name = ? AND last_name = ?;`;

  const query2 = `SELECT id, first_name, last_name FROM model_example.authors
  WHERE first_name = ? AND last_name = ?;`;
  
  const query = middleName ? query1 : query2;
  
  const params = middleName ? [firstName, middleName, lastName] : [firstName, lastName];
  
  const [authorData] = await connection.execute(query, params);

  if (authorData.length === 0) return null;

  return authorData;
};

module.exports = {
  getAll,
  findById,
  createAuthor,
  findByName,
};
