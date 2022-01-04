// 2 - Criar função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: usar parâmetro rest
// escreva sum abaixo:
const sum = (...elems) => elems.reduce((acc, curr) => acc + curr, 0);
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

const sum2 = (...elems) => elems.reduce(((acc, curr, index) => {
  console.log('index', index, 'acum', acc);
  console.log('index', index, 'atual', curr);
  return acc + curr;
}), 0);
console.log(sum2(12, 28, 26));
