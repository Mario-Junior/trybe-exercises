// 2 - Criar função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: usar parâmetro rest
// escreva sum abaixo:
const sum = (...elems) => elems.reduce((acc, curr) => acc + curr, 0);
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

// Entendendo o reduce internamente:
const sum2 = (...elems) => elems.reduce((acc, curr, index) => {
  console.log('index', index, 'acum', acc, 'atual', curr);
  return acc + curr;
}, 0);
console.log('acum', sum2(12, 28, 26));
