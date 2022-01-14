const { saveFavoriteMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = () => {
  // implemente sua função aqui
}

describe(' Testa a função saveFavoriteMagicCard', () => {
  it('1- Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions();
    // 1.1 Verifica que após a execução da função saveFavoriteMagicCard, favoriteCards passa a possuir length === 5.
    await saveFavoriteMagicCard('130553');
    expect(favoriteCards.length).toBe(5);

    // 1.2 Verifica que na última posição do array favoriteCards existe um card com o a propriedade name e valor "Beacon of Immortality".
    const lastCard = favoriteCards[favoriteCards.length - 1];
    expect(lastCard.name).toBe('Beacon of Immortality');

  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    // expect.assertions();
    // expect(favoriteCards).toHaveLength(4);

    // implemente seus testes aqui
  });
});
