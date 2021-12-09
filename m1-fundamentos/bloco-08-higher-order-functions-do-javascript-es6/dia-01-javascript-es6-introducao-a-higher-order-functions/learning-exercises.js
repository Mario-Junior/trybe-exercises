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

// const button = document.querySelector('#signup-button');

// const registerUser = () => {
//   console.log('Registrado com sucesso!');
// };

// button.addEventListener('click', registerUser);

// Estruturando uma HOF
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};
repeat(5, console.log);

// aumento de complexidade e construção de funções mais especializadas e bem definidas
const repeat2 = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat2(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

// Testar quais números são ímpares. Veja como fica fácil ajustar a implementação
const repeat3 = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat3(3, isEven); // Testa quais números serão pares;
repeat3(3, isOdd); // Testa quais números serão ímpares;

const numberGenerator = () => {
  return Math.random() * 100;
}

console.log(numberGenerator);
// Não gera o número aleatório, pois imprimimos apenas a escrita da função

// Versus

const numberGenerator2 = () => {
  return Math.random() * 100;
}

console.log(numberGenerator2());
// Para executar a função, temos que inserir os () na frente dela
