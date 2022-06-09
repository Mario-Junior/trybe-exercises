const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

describe('Rota /api/users', () => {
  describe('Consulta a lista de pessoas usuárias', () => {
    let response;

    before(async () => {
      response = await minhaRequisicao();
    });

    it('A requisição GET para a rota traz a lista inicial contendo dois registros', () => {
      expect(response.body).to.have.length(2);
    });
    it('Essa requisição deve retornar código de status 200', () => {
      expect(response).to.have.status(200);
    });
  });
});
