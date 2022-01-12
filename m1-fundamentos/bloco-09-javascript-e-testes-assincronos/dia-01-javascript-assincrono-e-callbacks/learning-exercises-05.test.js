//* Bloco 09 - Dia 01 *//
//* Setup e Teardown *//
// Códigos para entendimento
// cicles.test.js
let cities = [];

const addCity = (city) => {
  cities.push(city);
};

const removeCity = (city) => {
  cities = cities.filter((eachCity) => eachCity !== city);
};

// Teste básico padrão - fase 2 'Testes'
describe('Agrupa o primeiro bloco de testes', () => {
  test('Testa a função addCity', () => {
    expect.assertions(4);
    addCity('Campinas');
    addCity('Goiania');
    addCity('Recife');
    expect(cities).toHaveLength(3);
    expect(cities).toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
  });

  test('Testa a função removeCity', () => {
    expect.assertions(4);
    removeCity('Campinas');
    expect(cities).toHaveLength(2);
    expect(cities).not.toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
  });
});
// Teste usando as três fases - Setup (fase 1 = beforeEach) | Testes (fase 2) | Teardown (fase 3 = afterEach)
describe('Agrupa o segundo bloco de testes', () => {
  // Setup
  beforeEach(() => {
    cities = ['Pindamonhangaba'];
  });
  // Teardown
  afterEach(() => {
    cities = [];
  });

  test('Testa a função addCity utilizando o beforeEach', () => {
    expect.assertions(3);
    addCity('Piraporinha');
    expect(cities).toHaveLength(2);
    expect(cities).toContain('Pindamonhangaba');
    expect(cities).toContain('Piraporinha');
  });

  test('Testa a função removeCity utilizando o beforeEach', () => {
    expect.assertions(2);
    removeCity('Pindamonhangaba');
    expect(cities).not.toContain('Pindamonhangaba');
    expect(cities).toHaveLength(0);
  });
});
// Outro teste usando as três etapas
describe('Agrupa o terceiro bloco de testes', () => {
  beforeEach(() => {
    cities = ['Tangamandapio'];
  });
  
  afterEach(() => {
    cities = [];
  });
  
  test('Testa a função addCity dentro do terceiro bloco de testes', () => {
    expect.assertions(3);
    expect(cities).toHaveLength(1);
    expect(cities).not.toContain('Pindamonhangaba');
    expect(cities).toContain('Tangamandapio');
  });
  
  test('Testa a função removeCity dentro do terceiro bloco de testes', () => {
    expect.assertions(2);
    removeCity('Tangamandapio');
    expect(cities).not.toContain('Pindamonhangaba');
    expect(cities).toHaveLength(0);
  });
});
// Atenção que está sendo usando o 'describe(, () => {})' para englobar os casos de testes e permitir que o código das funções não necessite ser repetido
