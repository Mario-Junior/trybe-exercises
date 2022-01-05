//* Bloco 09 - Dia 01 *//
//* Operações assíncronas *//
// Obs.: aguardar os tempos necessários das setTimeout() para observar as simulações de ações assíncronas
console.log('1 - Receber roda');
console.log('2 - Encaixar parafusos');
console.log('3 - Fixar roda no carro');
console.log('\n');

console.log('1 - Comprar parafusos');
console.log('2 - Adicionar ao estoque');
console.log('3 - Receber roda');
console.log('4 - Encaixar parafusos');
console.log('5 - Fixar roda no carro');
console.log('\n');

setTimeout(() => {
  console.log('Comprar parafusos') // Comprar parafusos
  console.log('Adicionar ao estoque') // Adicionar ao estoque
  console.log('\n');
}, 2000);
console.log('1 - Receber roda'); // 1 - Receber roda
console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

setTimeout(() => {
const pushNumber = (list, number) => list.push(number);
let numbers = [];
pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);
console.log(numbers);
console.log('\n');
}, 3000);

setTimeout(() => {
const pushNumber = (list, number) => list.push(number);
let numbers = [];
setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);
console.log(numbers); // O retorno é [2, 3]
console.log('\n');
}, 3000);

const pushNumber = (list, number) => list.push(number);
let numbers = [];
setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);
setTimeout(() => console.log(numbers), 3000);
setTimeout(() => console.log('\n'), 3000);
