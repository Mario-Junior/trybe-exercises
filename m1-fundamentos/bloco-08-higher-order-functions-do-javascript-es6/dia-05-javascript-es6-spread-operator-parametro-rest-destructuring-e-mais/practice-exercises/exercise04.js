// 4 - Escrever função filterPeople que, dada lista de pessoas, retorna todas pessoas australianas que nasceram no século 20:
// Dica: use object destructuring
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
const filterPeople = (arr) => arr.filter(( {nationality, bornIn} ) => nationality === 'Australian' && bornIn > 1900 && bornIn <= 2000);
console.log(filterPeople(people));
