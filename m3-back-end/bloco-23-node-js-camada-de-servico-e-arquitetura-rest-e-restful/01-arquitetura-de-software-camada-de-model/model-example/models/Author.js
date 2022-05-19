const connection = require('./connection');

// função que converte o nome dos campos de snake_case para camelCase:
const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name});

// função que cria uma string com nome completo do autor e passa para o novo objeto:
// `Boolean` é uma função que recebe um parâmetro e retorna true ou false
// nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName]
    .filter(Boolean).join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};
  
// query que busca as pessoas autoras do BD:
const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );
  return authors.map(serialize).map(getNewAuthor);
};

module.exports = {
  getAll,
};
