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
