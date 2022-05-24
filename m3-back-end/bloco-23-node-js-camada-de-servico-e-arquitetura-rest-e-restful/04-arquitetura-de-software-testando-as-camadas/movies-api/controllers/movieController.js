const MoviesService = require('../services/movieService');

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MoviesService.create({ title, directedBy, releaseYear });

  if (!movie) {
    return res.status(400).send('Dados inválidos');
  }
  return res.status(201).send('Filme criado com sucesso!');
};

/*
'Middlewares', ao invés de executar um 'return' padrão, como outras funções, vão, na maior parte das vezes, devolver as
funções passadas por parâmetro, através dos objetos 'req, res, next'.

Neste caso, utilizo os métodos 'status()' e 'send()', de 'res' (response) para escrever/devolver um valor para a
requisição daquele 'end-point'.
*/

module.exports = { create };
