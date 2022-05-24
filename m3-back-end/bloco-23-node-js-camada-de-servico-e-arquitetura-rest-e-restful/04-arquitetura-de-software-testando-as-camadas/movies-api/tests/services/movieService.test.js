const sinon = require('sinon');
const { expect } = require('chai');

// const MoviesService = {
//   create: () => {},
// };

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

// Preciso validar se recebo todos os campos necessários à operação. Como trata-se de regra de negócio, valido na camada de serviços.

describe('Insere um novo filme no BD', () => {
  describe('Quando o payload informado não é válido', () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });
  });

  describe('Quando é inserido com sucesso', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    // crio o Mock para alimentar o retorno da função como esperado de MoviesModel
    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create').resolves({ id: ID_EXAMPLE });
    });

    // restauro a função 'create' original após os testes
    after(() => {
      MoviesModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});
