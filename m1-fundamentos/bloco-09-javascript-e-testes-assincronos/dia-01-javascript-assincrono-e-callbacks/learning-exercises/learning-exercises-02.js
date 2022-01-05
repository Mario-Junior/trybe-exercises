//* Bloco 09 - Dia 01 
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
console.log('\n');
// Para fixar
// Definição da função userFullName
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;

// Definição da função getUser
const getUser = (param) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  // Retornamos nosso parâmetro, que será uma função (callback)
  return param(userToReturn);
};

// Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
console.log(getUser(userFullName));
console.log('\n');

// Exercícios:
// 1 - Adicionar callback como parâmetro da funcão getUser
const userFullName1 = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser1 = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return callback(userToReturn);
};

console.log(getUser1(userFullName1)); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
console.log(getUser1(userNationality)); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"
