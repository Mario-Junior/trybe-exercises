/* PRÁTICA:
1. Fazer um programa que, dado um valor n, com n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Exemplo:
n = 5
*****
*****
*****
*****
*****
 */

let n = 6;
let asterisk = '*';
let line = '';

for (let i = 0; i < n; i += 1) {
  line = line + asterisk;
}
for (let i = 0; i < n; i += 1) {
  console.log(line);
}
