//* Bloco 09 - Dia 01 *//
//* Testes Assíncronos com Callbacks *//
Este teste, gera falso positivo, pois o teste só roda o bloco 'false' do código, parte assíncrona, após o timeout;
test('Não deveria passar!', () => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
  }, 500);
});

// Reescrevendo o teste com a callback 'done' que é a biblioteca do Jest para chamar após os testes assíncronos.
// Porém, ele falha com uma mensagem de timeout.
test('Não deveria passar!', (done) => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
    done();
  }, 500);
});


test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done();
    }
  }, 500);
});