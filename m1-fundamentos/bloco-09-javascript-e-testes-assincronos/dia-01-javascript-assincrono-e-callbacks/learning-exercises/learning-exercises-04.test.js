//* Bloco 09 - Dia 01 *//
//* Testes Assíncronos com Callbacks *//
test('Não deveria passar!', () => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
  }, 500);
});
