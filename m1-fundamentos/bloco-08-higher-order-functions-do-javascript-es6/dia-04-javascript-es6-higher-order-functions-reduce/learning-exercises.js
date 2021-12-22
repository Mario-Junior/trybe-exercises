// 8.3 array.reduce
// Sintaxe: array.reduce(callback(acc, cur [, index [, array]]) [, init]);

// Função soma todos os valores de um array:
// Apenas com for :

const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita
for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers); // 113

// Com reduce:
const sumNumbers2 = numbers.reduce((result, number) => result + number);
// O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers2); // 113

// Ou seja:
const getSum = (result, number) => result + number;
const sumNumbers3 = numbers.reduce(getSum);
console.log(sumNumbers3); // 113

// Outro exemplo:
const collection = [1, 2, 3, 4, 5];

const getSum2 = (accumulator, number) => {
  console.log(accumulator); // 1 3 6 10
  return accumulator + number;
};

const sumNumbers4 = collection.reduce(getSum2);
console.log(sumNumbers4); // 15

// reduce também pode ser acionada com a utilização de um valor inicial como parâmetro `init`
// Nota: Se o valorInicial não tiver sido passado como argumento, então reduce() executará o callback da função começando a partir do índice 1 (index 1), pulando o primeiro índice (index 0). Se o valorInicial for passado como argumento, a função irá começar no index 0 - https://mzl.la/3plxvQr

// Sem alteração:
const numbers2 = [32, 15, 3, 2, -5, 56, 10];

const getSum3 = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
};

const sumNumbers5 = numbers2.reduce(getSum3);
console.log(sumNumbers5); // 113

// Com alteração:
const numbers3 = [32, 15, 3, 2, -5, 56, 10];

const getSum4 = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers6 = numbers3.reduce(getSum4, 0); // Parâmetro adicionado ao reduce: o "0" note no log anterior que a iteração começou dele;
console.log(sumNumbers6); // 113

// Alterando o init para outro valor para ver a diferença no resultado:
const numbers4 = [32, 15, 3, 2, -5, 56, 10];

const getSum5 = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
const sumNumbers7 = numbers4.reduce(getSum5, 10); // Parâmetro adicionado ao reduce: o 10;
console.log(sumNumbers7); // 123
