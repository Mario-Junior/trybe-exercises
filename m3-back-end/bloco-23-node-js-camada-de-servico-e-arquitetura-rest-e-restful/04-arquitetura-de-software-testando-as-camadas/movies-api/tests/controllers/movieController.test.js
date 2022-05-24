const sinon = require('sinon');
const { expect } = require('chai');

// const MoviesController = {
//   create: () => {}
// };

const MoviesService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');

describe('Ao chamar o controller de create', () => {
  describe('Quando o payload informado não é válido', () => {
    const request = {};
    const response = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();
      
      /*
      O stub simula os comportamentos do `service`, dessa forma, consigo testar o comportamento do controller de maneira isolada.
      
      Aqui, todos os testes que requisitarem o serviço, devem receber retorno `false`.
      */
     
      sinon.stub(MoviesService, 'create').resolves(false);
    });

    // Restauro a função 'create' original após os testes
    after(() => {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });
  });

  describe('Quando é inserido com sucesso', () => {
    const request = {};
    const response = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();

      // Aqui, todos os testes que requisitarem o serviço, devem receber retorno 'true'
      sinon.stub(MoviesService, 'create').resolves(true);
    });

    // Restauro a função 'create' original após os testes
    after(() => {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 201', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
    })
  });
});
