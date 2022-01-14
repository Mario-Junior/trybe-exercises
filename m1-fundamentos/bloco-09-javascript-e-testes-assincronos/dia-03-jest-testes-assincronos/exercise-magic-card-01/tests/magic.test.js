require('../simulator/fetchSimulator');
const { getMagicCard } = require('../src/magic.js');
const { card } = require('../simulator/card');

describe('Testa a função getMagicCard', () => {
  // 1 - Completei a sintaxe com async antes do it e await antes da chamada da função getMagicCard
  it('2- Deve possuir a propriedade name com o valor Ancestor\'s Chosen', async () => {
    const response = await getMagicCard('130550');
    const { name } = response;
    expect(name).toBe(`Ancestor\'s Chosen`);
  });
  it('3- getMagicCard é uma função', async () => {
    expect(typeof getMagicCard).toBe('function');
  });
  it('4- Com o argumento "130550", a função fetch é chamada.', async () => {
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalled();
  });
});
