/* Agora a prática
Aprofunde seus conhecimentos
Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7: */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ; */

for (let i = 0; i < numbers.length; i +=1) {
  console.log(numbers[i]);
}

console.log('\n');

/* 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; */

let arrSum = 0;

for (let i = 0; i < numbers.length; i +=1) {
  arrSum = arrSum + numbers[i];
}
console.log(arrSum);

console.log('\n');

/* 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos. */

let arrSum3 = 0;

for (let i = 0; i < numbers.length; i +=1) {
  /* arrSum3 = arrSum3 + numbers[i]; ou */
  arrSum3 += numbers[i];
}

let arrAverage = arrSum3 / numbers.length;

console.log(arrAverage);

console.log('\n');

/* 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; */

if (arrAverage > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

console.log('\n');

/* 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o; */

let hValue = 0;

for (let i = 0; i < numbers.length; i +=1) {
  if (numbers[i] > hValue) {
    hValue = numbers[i];
  } else {
  }
}
console.log(hValue);

console.log('\n');

/* 6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */
let odd = 0;

for (let i = 0; i < numbers.length; i +=1) {
  if (numbers[i] % 2 !== 0) {
    odd += 1
  } else {
  }
}
if (odd === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(odd);
}
console.log('\n');

/* 7.Utilizando for , descubra qual o menor valor contido no array e imprima-o; */

let lowValue = 0;

for (let i = 0; i < numbers.length; i +=1) {
  if (lowValue === 0) {
    lowValue = numbers[i];
  } else if (numbers[i] < lowValue) {
    lowValue = numbers[i];
}
}
console.log(lowValue);

console.log('\n');

/* GABARITO (solução melhor logicamente que a minha - mas acrescentei '0' ao Array e minha solução também passou no teste ;D):
o valor da variável smallestNumber poderia ser qualquer um, desde que fosse maior que o maior número do array numbers. Caso atribuíssemos o valor 1 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1 */

let smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  }
}

console.log(smallestNumber);
console.log('\n');

/* 8.Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado; */
let numArray = [];
for (let i = 1; i <= 25; i += 1) {
  numArray.push(i);
}
console.log(numArray);
console.log('\n');

/* 9.Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 . */
for (let i = 0; i < numArray.length; i += 1) {
  console.log(numArray[i] / 2);
}
console.log('\n');

/* BÔNUS */
