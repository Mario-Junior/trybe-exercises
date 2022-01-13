require('../simulator/fetchSimulator');
const { getMagicCard } = require('../src/magic.js');
const { card } = require('../simulator/card');

describe('Testa a função getMagicCard', () => {
  it('Deve possuir a propriedade name com o valor Ancestor\'s Chosen', async () => {
    const response = await getMagicCard('130550');
    const { name } = response;
    expect(name).toBe(`Ancestor\'s Chosen`);
  });
});
