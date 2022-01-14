const { saveFavoriteMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = () => {
  // implemente sua função aqui
}

describe(' Testa a função saveFavoriteMagicCard', () => {
  it('Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions();
    await saveFavoriteMagicCard('130553');

    // implemente seus testes aqui
  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    // expect.assertions();
    // expect(favoriteCards).toHaveLength(4);

    // implemente seus testes aqui
  });
});
