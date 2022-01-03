//* Spread Operator *//

// Adicionar itens a um array ... Usando push:
const numbers = [1, 2, 3];
numbers.push(4);

console.log(numbers); // [1, 2, 3, 4] => o array original foi alterado

const numbers2 = [1, 2, 3];
const newArray = [...numbers2, 4, 5, 6]; // com spread operator
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers2); // [ 1, 2, 3 ] => o array original não foi alterado

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */

// Uso interessante do spread no argumento de função que recebe vários parâmetros.
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.70];

console.log(imc(...patientInfo)); // 20.76

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5

// com Objetos:
const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = { ...people, ...about };
console.log(customer); /* {
  id: 101,
  name: 'Alysson',
  age: 25,
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer'
} */

// Para fixar
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['blackberry', 'cherry', 'strawberry'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['canned milk', 'chia', 'orange juice'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];
console.log(fruitSalad(specialFruit, additionalItens));

//* Parâmetro Rest *//
function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88

const bigMac = (...args) => args.reduce((accumulator, current) => accumulator + current);
console.log(bigMac('dois hamburgueres,', ' alface,', ' queijo,', ' molho especial,', ' cebola,', ' picles,', ' num pão com gergelim'))

//* Object Destructuring *//
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};
console.log(product.name);
console.log(product.price);
console.log(product.seller);

const {name, price, seller} = product;
console.log(`${name}
${price}
${seller}`);
