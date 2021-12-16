//8.3 Array.filter

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);

console.log(isEven); // [ 30, 22 ]

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 2 === 0);

console.log(isEven2); // [ 30, 22 ]

// Neste caso, deseja-se apenas as pessoas que não possuem ainda idade para dirigir:
const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) => (
  arrayOfPeople.filter((people) => (people.age < 18))
);

console.log(verifyAgeDrive(objPeople));
// [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]


// Outra forma de se usar filter é retornar um array sem o elemento desejado:
const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) =>
  listStudents.filter((student) => student !== name);
  // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]

// 8.3 Array.map
// Diferença usando for e em seguida map:
const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = [];

for (let index = 0; index < persons.length; index += 1) {
  fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}
console.log(fullNames);

const fullNamesComMap = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNamesComMap); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

const dobro = [];
const multDois = () => {
  const listaNumeros = [10, 20, 30, 40];
  for (let i = 0; i < listaNumeros.length; i += 1) {
    dobro.push(listaNumeros[i] * 2);
  }
  return dobro;
};
console.log(multDois());

const listaNumeros2 = [10, 20, 30, 40];

const dobro2 = listaNumeros2.map((callback) => callback * 2);

console.log(dobro2);
