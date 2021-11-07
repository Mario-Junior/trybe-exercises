/* 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido. */

let grossSalary = 3500;
console.log('Salário Bruto: R$ ' + grossSalary);

/* Alíquotas de INSS */
const inss8 = 0.08;
const inss9 = 0.09;
const inss11 = 0.11;
const inssMax = 570.88;

/* Calculando a dedução de INSS - Salário Base */
let baseSalary;
if (grossSalary <= 1556.94) {
  baseSalary = grossSalary * (1 - inss8);
} else if (grossSalary <= 2594.92) {
  baseSalary = grossSalary * (1 - inss9);
} else if (grossSalary <= 5189.82) {
  baseSalary = grossSalary * (1 - inss11);
} else {
  baseSalary = grossSalary - inssMax;
}
console.log('Salário Base após dedução de INSS: R$ ' + baseSalary);

/* Alíquotas de IR */
const irIsento = 0;
const ir7 = 0.075;
const ir15 = 0.15;
const ir22 = 0.225;
const ir27 = 0.275;

/* Calculando a dedução de IR */
let irValue;
if (baseSalary <= 1903.98) {
  irValue = baseSalary * 0;
} else if (baseSalary <= 2826.65) {
  irValue = (baseSalary * ir7) - 142.8;
} else if (baseSalary <= 3751.05) {
  irValue = (baseSalary * ir15) - 354.8;
} else if (baseSalary <= 4664.68) {
  irValue = (baseSalary * ir22) - 636.13;
} else {
  irValue = (baseSalary * ir27) - 869.36;
}
console.log('Valor de dedução de IR: R$' + irValue);

/* Apontando o Salário Líquido: */

let netSalary = baseSalary - irValue;

console.log('Resultado do Salário Líquido: R$ ' + netSalary);

/* GABARITO */

let aliquotINSS;
let aliquotIR;

const grossSalary2 = 3500.00;

if (grossSalary2 <= 1556.94) {
  aliquotINSS = grossSalary2 * 0.08;
} else if (grossSalary2 <= 2594.92) {
  aliquotINSS = grossSalary2 * 0.09;
} else if (grossSalary2 <= 5189.82) {
  aliquotINSS = grossSalary2 * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary2 = grossSalary2 - aliquotINSS;

if (baseSalary2 <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary2 <= 2826.65) {
  aliquotIR = (baseSalary2 * 0.075) - 142.80;
} else if (baseSalary2 <= 3751.05) {
  aliquotIR = (baseSalary2 * 0.15) - 354.80;
} else if (baseSalary2 <= 4664.68) {
  aliquotIR = (baseSalary2 * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary2 * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary2 - aliquotIR));
