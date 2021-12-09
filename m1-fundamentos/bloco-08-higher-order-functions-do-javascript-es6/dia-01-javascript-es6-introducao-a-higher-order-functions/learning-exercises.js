// First-Class Functions
// Atribuir funções à variáveis:

function sum (number1, number2) {
  return number1 + number2;
}

const sumVariable = sum;

console.log(sumVariable);
//  [Function: sum]

// Passar funções como argumento para outras funções:
const sayHello = () => {
  return ('hello trybers');
}

const printGreeting = (callback) => {
    console.log(callback());
}

printGreeting(sayHello);

// Retornar uma função de outra função:
const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(5));

// Higher Order Functions - exemplo de usos cotidianos e já aplicados por nós
// Função que simula o registro de uma pessoa e passamos como argumento de uma 2a função
// Logo, addEventListener é uma HOF
// Obs.: essa função não 'funciona', pois não há vínculo do arquivo HTML (document)
const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);
