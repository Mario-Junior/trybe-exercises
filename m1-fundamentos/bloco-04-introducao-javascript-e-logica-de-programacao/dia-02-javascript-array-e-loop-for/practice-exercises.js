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
let arrSum;
for (let i = 0; i < numbers.length; i +=1) {
  arrSum = numbers[i] + numbers[i+1];
}
console.log(arrSum);
