//* Bloco 09 - Dia 01 *//
//* Testes Assíncronos com Callbacks *//
// Este teste, gera falso positivo, pois o teste só roda o bloco 'false' do código, parte assíncrona, após o timeout;
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

// Refatorando e tratando o erro com o bloco try/catch:
// Mas o teste ainda retorna falso-positivo pois, como encerramos com 'done' após o erro, o teste é interpretado como correto.
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

// Refatorando para finalmente a callback pegar (catch) o erro lançado pela callback 'done'
test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done(error); // Alteramos esta linha
    }
  }, 500);
});
