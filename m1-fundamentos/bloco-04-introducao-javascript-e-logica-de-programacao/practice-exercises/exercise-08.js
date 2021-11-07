/* 8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if . */

const numA = 1;
const numB = 4;
const numC = 7;

if (numA % 2 === 0 || numB % 2 === 0 || numC % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}

/* GABARITO */

const a = 1;
const b = 3;
const c = 5;

let isEven = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  isEven = true;
};
console.log(isEven);
