// 8.3 array.reduce
// Sintaxe: array.reduce(callback(acc, cur [, index [, array]]) [, init]);

// Função soma todos os valores de um array:
// Apenas com for :

const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita
for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers); // 113

// Com reduce:
const sumNumbers2 = numbers.reduce((result, number) => result + number);
// O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers2); // 113

// Ou seja:
const getSum = (result, number) => result + number;
const sumNumbers3 = numbers.reduce(getSum);
console.log(sumNumbers3); // 113

// Outro exemplo:
const collection = [1, 2, 3, 4, 5];

const getSum2 = (accumulator, number) => {
  console.log(accumulator); // 1 3 6 10
  return accumulator + number;
};

const sumNumbers4 = collection.reduce(getSum2);
console.log(sumNumbers4); // 15

// reduce também pode ser acionada com a utilização de um valor inicial como parâmetro `init`
// Nota: Se o valorInicial não tiver sido passado como argumento, então reduce() executará o callback da função começando a partir do índice 1 (index 1), pulando o primeiro índice (index 0). Se o valorInicial for passado como argumento, a função irá começar no index 0 - https://mzl.la/3plxvQr

// Sem alteração:
const numbers2 = [32, 15, 3, 2, -5, 56, 10];

const getSum3 = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
};

const sumNumbers5 = numbers2.reduce(getSum3);
console.log(sumNumbers5); // 113

// Com alteração:
const numbers3 = [32, 15, 3, 2, -5, 56, 10];

const getSum4 = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers6 = numbers3.reduce(getSum4, 0); // Parâmetro adicionado ao reduce: o "0" note no log anterior que a iteração começou dele;
console.log(sumNumbers6); // 113

// Alterando o init para outro valor para ver a diferença no resultado:
const numbers4 = [32, 15, 3, 2, -5, 56, 10];

const getSum5 = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
const sumNumbers7 = numbers4.reduce(getSum5, 10); // Parâmetro adicionado ao reduce: o 10;
console.log(sumNumbers7); // 123

// Comparar valores para buscar o maior valor em um array - com for:
const numArr = [50, 85, -30, 3, 15];

let bigger = 0;
for (let i = 0; i < numArr.length; i += 1) {
  if (numArr[i] > bigger) {
    bigger = numArr[i];
  };
};
console.log(bigger);

// Com reduce:
const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger2 = numArr.reduce(getBigger, 0);
console.log(bigger2); // 85

// Com reduce (com console.log na função para ver os detalhes):
const numArr2 = [50, 85, -30, 3, 15];

const getBigger2 = (bigger, number) => {
  console.log(bigger);
  return (bigger > number) ? bigger : number;
};
const bigger3 = numArr2.reduce(getBigger2, 0);
console.log(bigger3); // 85

// Fazer função com reduce que some todos os números pares do array:
const isEvenArr = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// Com reduce e filter:
const getEven = (isEven) => isEven % 2 === 0;
const sumNum = (result, number) => result + number;

const sumEven = (arr) => arr.filter(getEven).reduce(sumNum);

console.log(sumEven(isEvenArr));

// Só com reduce:
const getEvenSum = (sum, isEven) => ((isEven % 2 === 0) ? sum + isEven : sum);

const sumEven2 = (arr) => arr.reduce(getEvenSum, 0);

console.log(sumEven2(isEvenArr));

const letters = ['A', 'M', 'O', 'R'];
const join = (acc, curr) => acc + curr;
const word = letters.reduce(join);
console.log(word);

// Criar função usando os dados dos estudantes do conteúdo anterior, mostrar na tela relatório que diz em qual matéria o estudante foi melhor. Usar tanto o map quanto, dentro dele, o reduce!

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

// resultado esperado: 
[
  { name: 'Jorge', materia: 'Português' },
  { name: 'Mario', materia: 'Biologia' },
  { name: 'Jorge', materia: 'Português' },
  { name: 'Maria', materia: 'Química' },
  { name: 'Natalia', materia: 'Português' },
  { name: 'Wilson', materia: 'Português' },
]

const bestGrade = (subject1, subject2) => {
  if (subject1.nota > subject2.nota) return subject1;
  return subject2;
};

const reportBestGrade = (students) => students.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce(bestGrade).name}));

console.log(reportBestGrade(estudantes));
