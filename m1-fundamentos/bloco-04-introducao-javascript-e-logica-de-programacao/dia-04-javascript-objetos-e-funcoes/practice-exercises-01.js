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
console.log(sum(10, 2), ' | ', subt(10, 2), ' | ', mult(10, 2), ' | ', div(10, 2), ' | ', mod(10, 2));
/* 2. Faça um programa que retorne o maior de dois números. */
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

/* 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */
const a = 28;
const b = 12;
const c = 26;

console.log('const a = ' + a);
console.log('const b = ' + b);
console.log('const b = ' + c);

if (a > b && a > c) {
  console.log('a é a maior');
} else if (b > a && b > c) {
  console.log('b é a maior');
} else {
  console.log('c é a maior');
}

/* 4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. */

const value = 12;

console.log('const value = ' + value);

if (value > 0) {
  console.log('positive');
} else if (value < 0) {
  console.log('negative');
} else {
  console.log('zero');
}

/* 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo. */

const angleA = 90;
const angleB = 60;
const angleC = 30;

if (angleA <= 0 || angleB <=0 || angleC <=0) {
  console.log('ATENÇÃO! Algum ângulo é inválido!');
} else if (angleA + angleB + angleC === 180) {
  console.log(true);
} else {
  console.log(false);
}


/* GABARITO: */

let degreeAngleA = 90;
let degreeAngleB = 60;
let degreeAngleC = 30;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}