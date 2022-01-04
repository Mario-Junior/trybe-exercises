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
// Acessar posições do objeto como conhecíamos até agora
console.log(product.name);
console.log(product.price);
console.log(product.seller);

// Sintaxe da desestruturação de objetos é passarmos o nome das propriedades para acesso do lado esquerdo, entre chaves, e o objeto do lado direito:
const {name, price, seller} = product;
console.log(`${name}
${price}
${seller}`);

// Outra aplicação é reatribuir o nome de propriedade ao declará-la como uma variável:
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: firstname, b: classAssigned, c: subject } = student;
console.log(firstname); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática

// A forma acima é equivalente a abaixo:
const name2 = student.a;
console.log(name2); // Maria

// Outra situação para desestruturação de objetos é passar valores de um objeto como parâmetros para uma função:
const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};
printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

//* Array Destructuring *//

// Acessar posições do array como conhecíamos até agora:
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

// Com array destructuring, declaramos todas as variáveis com os nomes dos países em apenas uma linha de código:
const arrCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [country1, country2, country3, country4] = arrCountries; // Sintaxe!

console.log(country1); // Brazil
console.log(country2); // Japan
console.log(country3); // China
console.log(country4); // Canada

// Para fixar:
// 1 - Produzir mesmo resultado, utilizando array destructuring para recolher a função e a saudação.
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
saudacoes[1](saudacoes[0]); // Olá
// Produza o mesmo resultado acima, porém utilizando array destructuring
const [saudacao, funcaoDeSaudacao] = saudacoes;
funcaoDeSaudacao(saudacao); // Olá

// 2 - Seguem alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corriir:
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
console.log(comida, animal, bebida);
// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida); // arroz gato água

// 3 - array possui números que não condizem com o conteúdo. Através de array destructuring, fazer com que existam apenas números pares na variável numerosPares .
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
console.log(numerosPares);
// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
[,,, ...numerosPares] = numerosPares;
console.log(numerosPares); // [6, 8, 10, 12];
