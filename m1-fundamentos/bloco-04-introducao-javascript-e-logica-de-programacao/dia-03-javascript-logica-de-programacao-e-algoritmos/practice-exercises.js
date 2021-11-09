/* PRÁTICA:
1. Fazer um programa que, dado um valor n, com n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Exemplo:
n = 5
*****
*****
*****
*****
*****
 */

let n = 5;
let item = '* ';
let line = '';

for (let i = 0; i < n; i += 1) {
  line = line + item;
}
for (let i = 0; i < n; i += 1) {
  console.log(line);
}
console.log('\n');

/* 2.Imprimir um triângulo retângulo com 5 asteriscos de base:
n = 5
*
**
***
****
***** */

let item2 = '* '
let column = '';
for (let i = 0; i < n; i += 1) {
  column = column + item2;
  console.log(column);
}
console.log('\n');

/* 3.Inverter o lado do triângulo - Atenção! Exercício é mais complexo que o anterior! É prciso uma lógica para imprimir os espaços:
n = 5
    *
   **
  ***
 ****
*****/
let spaces = '-';
let line3 = '';
let position = n;
for (let i = 0; i < n; i += 1) {
  
  line3 = line3 + spaces;
}
console.log(line3);
console.log('\n');

// Exercícios da Aula ao Vivo:
// 1. Faça um algoritmo que calcule a soma de 1 a 1000 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 1000 é: X.
let sumLive = 0;
let end = 1000;

for (let i = 1; i <= end; i += 1) {
  sumLive = sumLive + i;
}
console.log('A soma de 1 a 1000 é: ' + sumLive);
console.log('\n');

//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let sumLive2 = 0;
let max = 150;
for (let i = 2; i <= max; i +=1) {
  if (i % 3 == 0) {
    sumLive2 +=1;
  }
  if (sumLive2 == 50) {
    console.log('a soma dos números é 50');
  }
}
console.log('\n');

//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 
const pd = 'pedra';
const pp = 'papel';
const ts = 'tesoura';

let p1 = 'tesoura';
let p2 = 'tesoura';

if (p1 === pd && p2 === ts || p1 === pp && p2 === pd || p1 === ts && p2 === pp) {
  console.log('Player 1 won');
} else if (p2 === pd && p1 === ts || p2 === pp && p1 === pd || p2 === ts && p1 === pp) {
  console.log('Player 2 won');
} else {
  console.log('A Ties');
}
console.log('\n');

//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
const majority = 18;
let age = 17;
if (age >= majority) {
  console.log('A pessoa é maior de idade');
} else {
  console.log('Opa! A pessoa ainda é menor de idade');
}
console.log('\n');

//5. Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.
let ageBaeta = 31;
let ageCarol = 25;
let ageMurilo = 35;
if (ageBaeta < ageCarol && ageBaeta < ageMurilo) {
  console.log('Baêta é a pessoa mais nova');
} else if (ageCarol < ageBaeta && ageCarol < ageMurilo) {
  console.log('Caról é a pessoa mais nova');
} else {
  console.log('Murilo é a pessoa mais nova');
}
