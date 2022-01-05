//* Bloco 09 - Dia 01 
//* Operações assíncronas *//
// Obs.: aguarde os tempos necessários das setTimeout() para observar as simulações de ações assíncronas
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

//* Callbacks *//
const despesas = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const renda = 1000;

const despesaMensal = (renda, despesas, callback) => {

  const despesaTotal = callback(despesas);
  const saldoFinal = renda - despesaTotal;

  console.log(`Balanço do mês:
    Recebido: R$${renda},00
    Gasto: R$${despesaTotal},00
    Saldo: R$${saldoFinal},00 `);
};

const somaDespesas = (despesas) => {
  const custoItem = despesas.map((item) => Object.values(item));
  const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
  return despesaTotal;
};

despesaMensal(renda, despesas, somaDespesas);
