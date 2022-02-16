const service = require('./service');

describe('Exercício Prático - Parte 1.1', () => {
  test('Se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
    service.returnRandomNumber = jest.fn().mockReturnValue(10);

    expect(service.returnRandomNumber()).toBe(10);
    expect(service.returnRandomNumber).toHaveBeenCalled();
    expect(service.returnRandomNumber).toHaveBeenCalledTimes(1);
  });
});
describe('Exercício Prático - Parte 1.2', () => {
  test('Se a função foi chamada, qual seu novo retorno, quantas vezes foi chamada e com quais parâmetros', () => {
    service.returnRandomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(service.returnRandomNumber(10, 2)).toBe(5);
    expect(service.returnRandomNumber).toHaveBeenCalled();
    expect(service.returnRandomNumber).toHaveBeenCalledTimes(1);
    expect(service.returnRandomNumber).toHaveBeenCalledWith(10, 2);
  });
});
describe("Exercício Prático - Parte 1.3", () => {
  test("Mock da função para receber 3 parâmetros e retornar sua multiplicação", () => {
    service.returnRandomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(service.returnRandomNumber(1, 2, 6)).toBe(12);
    expect(service.returnRandomNumber).toHaveBeenCalled();
    expect(service.returnRandomNumber).toHaveBeenCalledTimes(1);
    expect(service.returnRandomNumber).toHaveBeenCalledWith(1, 2, 6);
  });

  test("Resetando e refazendo o Mock da função para que receba um parâmetro e retorna seu dobro", () => {
    service.returnRandomNumber.mockReset();
    expect(service.returnRandomNumber).toHaveBeenCalledTimes(0);

    service.returnRandomNumber.mockImplementation(a => a * 2);

    expect(service.returnRandomNumber(6)).toBe(12);
    expect(service.returnRandomNumber).toHaveBeenCalled();
    expect(service.returnRandomNumber).toHaveBeenCalledTimes(1);
    expect(service.returnRandomNumber).toHaveBeenCalledWith(6);
  });
});
