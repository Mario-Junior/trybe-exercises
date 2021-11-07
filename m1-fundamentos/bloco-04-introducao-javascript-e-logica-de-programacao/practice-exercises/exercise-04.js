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
