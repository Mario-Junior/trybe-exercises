require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Testes para a função fetchCharacter', () => {
  it('Verifica se o nome da personagem é Wonder Woman', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toBe('Wonder Woman');
  });
});
