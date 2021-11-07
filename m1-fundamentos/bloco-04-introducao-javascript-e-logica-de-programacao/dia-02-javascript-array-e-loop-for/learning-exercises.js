/* Arrays (listas) */

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa ao final do Array
console.log(tasksList);
// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

tasksList.unshift('Tocar violão'); // adiciona mais uma tarefa no início do Array
console.log(tasksList);

tasksList.pop(); // remove o último item do array
console.log(tasksList);

tasksList.shift(); // remove o primeiro item do array
console.log(tasksList);

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);
// 1

/* Exercício 1
Obtenha o valor "Serviços" do array menu : */

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

/* Exercício 2
Procure o índice do valor "Portfólio" do array menu : */

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

/* Exercício 3
Adicione o valor "Contato" no final do array menu : */

menu.push('Contato');

console.log(menu);

console.log(menu.sort());

/* For */

let cars = ['Saab', 'Volvo', 'BMW'];

console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}

/* Exercício 1
Utilize o for para imprimir os elementos da lista groceryList com o console.log() : */

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList.sort()[index]);
}

/* For/of (ES6) */

let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}
// resultado: 
//1
//2
//3
//4
//5

let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31
/* É importante ressaltar que o for/of não irá alterar o array, e sim trazer os valores de dentro, e no caso, adicionando 1 à soma. */
console.log(arrOfNumbers);
// Resultado: [10, 20, 30]

/* Exercício 1
Utilize o for/of para imprimir os elementos da lista names com o console.log() : */

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let aName of names) {
 console.log(aName) ;
}
