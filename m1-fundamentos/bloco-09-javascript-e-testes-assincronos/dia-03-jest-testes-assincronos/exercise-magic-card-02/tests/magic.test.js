const { saveFavoriteMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = () => {
  // Remove 'n' elementos do índice 4 (posição 5) em diante, deixando o array com apenas os 4 elementos iniciais de novo!
  favoriteCards.splice(4, favoriteCards.length - 4);
}

describe(' Testa a função saveFavoriteMagicCard', () => {
  afterEach(() => {
    retrievesFavoriteCards();
  });

  it('1- Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions(3);
    // 1.1 Verifica que após a execução da função saveFavoriteMagicCard, favoriteCards passa a possuir length === 5.
    await saveFavoriteMagicCard('130553');
    expect(favoriteCards.length).toBe(5);

    // 1.2 Verifica que na última posição do array favoriteCards existe um card com o a propriedade name e valor "Beacon of Immortality".
    const lastCard = favoriteCards[favoriteCards.length - 1];
    expect(lastCard.name).toBe('Beacon of Immortality');

    // 1.3 Verifica que ao chamar a função saveFavoriteMagicCard com o argumento "130554", favoriteCards passa a possuir length === 6
    await saveFavoriteMagicCard('130554');
    expect(favoriteCards.length).toBe(6);
  });

  // 4 - Após descomentar o teste dentro deste it, rode os testes.
  it('5- Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions(1);
    expect(favoriteCards).toHaveLength(4);
  });
});
