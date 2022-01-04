const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// 2 - Criar string com os nomes de todas as pessoas autoras.
const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function getAuthorNames() {
  const stringNames = books.map((book) => book.author.name).reduce((name1, name2, index, array) => {
    if (index === array.length - 1) return `${name1}, ${name2}.`;
    return `${name1}, ${name2}`;
  });
  return stringNames;
}
console.log(getAuthorNames());

function getAuthorNames2() {
  const stringNames = books.map((book) => book.author.name).reduce((name1, name2, index, array) => (index === array.length - 1) ? `${name1}, ${name2}.` : `${name1}, ${name2}`);
  return stringNames;
}
console.log(getAuthorNames2());

// Solução da pessoa estudante Lucas Manete
function getAuthorNames3(arr) {
  return arr.map((book) => book.author.name)
  .reduce((name1, name2) => `${name1}, ${name2}`).concat('.');
}
console.log(getAuthorNames3(books));

// Gabarito
function reduceNames() {
  const names = books.reduce((acc, book, index, array) => {
    if (index === array.length - 1) return `${acc} ${book.author.name}.`;
    return `${acc} ${book.author.name},`;
  }, '');
  return names.trim();
}
console.log(reduceNames());
