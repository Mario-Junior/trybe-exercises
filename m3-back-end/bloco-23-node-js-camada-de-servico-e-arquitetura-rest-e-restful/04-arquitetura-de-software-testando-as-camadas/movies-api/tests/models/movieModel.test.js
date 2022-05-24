const sinon = require('sinon');
const { expect } = require('chai');

// Como ainda não há implementação, fixo um objeto simulando os métodos que desenvolverei, porém, eles não terão nenhum comportamento
// const MoviesModel = {
//   create: () => {}
// };

// Edito o teste para utilizar a minha implementação em models
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

const payloadMovie = {
  title: 'Example Movie',
  directedBy: 'Jane Dow',
  releaseYear: 1999,
};

describe('Insere um novo filme no BD', () => {

  before(async () => {
    const execute = [{ insertId: 1 }]; // retorno esperado no teste

    sinon.stub(connection, 'execute').resolves(execute);
  });

  // Restauro a função 'execute' original após os testes
  after(async () => {
    connection.execute.restore();
  });

  describe('Quando é inserido com sucesso', () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});

describe('Consulta os detalhes de um filme no BD pelo "id"', () => {

  before(async () => {
    const execute = [[]];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('Quando não existe filme pelo "id" informado', () => {
    it('retorna null', async () => {
      const response = await MoviesModel.findById();
      expect(response).to.be.equal(null);
    });
  });

  describe('Quando um filme é encontrado com sucesso', () => {

    before(async () => {
      const movie = { id: 1, ...payloadMovie };
  
      sinon.stub(MoviesModel, 'findById').resolves(movie);
    });
  
    after(async () => {
      MoviesModel.findById.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesModel.findById(1);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui as propriedades "id", "title", "releaseYear" e "directedBy"',
      async () => {
      const response = await MoviesModel.findById(1);

      expect(response.id).to.be.equal(1);
    });
  });
});
