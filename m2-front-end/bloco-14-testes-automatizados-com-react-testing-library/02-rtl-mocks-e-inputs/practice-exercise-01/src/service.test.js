const service = require('./service');

describe('Exercício Prático - Parte 1', () => {
  test('Se a função returnRandomNumber é chamada', () => {
    service.returnRandomNumber = jest.fn().mockReturnValue(10);
    expect(service.returnRandomNumber).toHaveBeenCalled;
  });
  test('Se a função returnRandomNumber é chamada apenas 1 vez', () => {
    service.returnRandomNumber = jest.fn().mockReturnValue(10);
    expect(service.returnRandomNumber).toHaveBeenCalledTimes(1);
  });
  test('Se o retorno da função é o number 10', () => {
    service.returnRandomNumber = jest.fn().mockReturnValue(10);
    expect(service.returnRandomNumber()).toBe(10);
  });
})
