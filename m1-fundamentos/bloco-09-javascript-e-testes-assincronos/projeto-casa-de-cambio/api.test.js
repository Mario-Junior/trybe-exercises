const { describe } = require("@jest/globals");
const { fetchCurrency } = require("./api");

describe('Testa a função "fetchCurrency"', () => {
  describe('Dado um cenário de sucesso', () => {
    test('1 - Se "fetchCurrency" é uma função', async () => {
      expect(typeof await fetchCurrency).toBe('function');
    });
    test('2 - Se "fetchCurrency" é chamada com o valor recebido como parâmetro', () => {
      
    });
  });
  describe('', () => {

  });
});
