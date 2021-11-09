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
let item = '*';
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

let item2 = '*'
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
let item3 = '*'
let line3 = '';
for (let i = 0; i < n; i += 1) {
  line3 = line3 + spaces;
  console.log(line3);
}
