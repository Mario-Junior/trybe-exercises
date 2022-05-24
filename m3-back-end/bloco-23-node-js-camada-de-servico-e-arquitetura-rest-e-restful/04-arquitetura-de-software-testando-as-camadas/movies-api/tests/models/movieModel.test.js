const sinon = require('sinon');
const { expect } = require('chai');

// Como ainda não há implementação, fixo um objeto simulando os métodos que desenvolverei, porém, eles não terão nenhum comportamento
// const MoviesModel = {
//   create: () => {}
// };

// Edito o teste para utilizar a minha implementação em models
const MoviesModel = require('../../models/movieModel');
const connection = require('../../models/connection');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

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
