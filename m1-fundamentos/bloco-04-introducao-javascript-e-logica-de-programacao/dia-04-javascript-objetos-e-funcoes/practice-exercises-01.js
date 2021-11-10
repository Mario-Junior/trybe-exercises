// Refatorando o código dos exercícios de 01 a 05 do final do dia 4.1 (feitos em 05/11/2021) organizando com Funções
// 1. Faça cinco programas, um para cada operação aritmética básica.
function sum(a, b) {
  return a + b;
};
function subt(a, b) {
  return a - b;
};
function mult(a, b) {
  return a * b;
};
function div(a, b) {
  return a / b;
};
function mod(a, b) {
  return a % b;
};
console.log(sum(10, 2), ' | ', subt(14, 2), ' | ', mult(6, 2), ' | ', div(24, 2), ' | ', mod(1212, 12));

// 2. Faça um programa que retorne o maior de dois números.
function majorNum(a, b) {
  if (a > b) {
    return a + ' é maior que ' + b;
  } else if (a < b) {
    return b + ' é maior que ' + a;
  } else {
    return 'Atenção! A (' + a + ') e B (' + b + ') são iguais!';
  }
};
console.log(majorNum(12, 12));

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
function compareNumbers(a, b, c) {
  if (a > b && a > c) {
    return a + ' é o maior';
  } else if (b > a && b > c) {
    return b + ' é o maior';
  } else if (c > a && c > b) {
    return c + ' é o maior';
  } else {
    return 'Todos os números são iguais!';
  }
};
console.log(compareNumbers(12, 12, 12));

// 4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
function polarity(number) {
  if (number > 0) {
    return 'positive';
  } else if (number < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
};
console.log(polarity(-12));

// 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.
function itsATriangle(a, b, c) {
  if (a <= 0 || b <=0 || c <=0) {
    return 'Attention, some angle is invalid!';
  } else if (a + b + c === 180) {
    return true;
  } else {
    return false;
  }
}
console.log(itsATriangle(12, 120, 48));