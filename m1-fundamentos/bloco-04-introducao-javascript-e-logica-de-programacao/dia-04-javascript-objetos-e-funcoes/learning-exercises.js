// Objetos:

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};
console.log('The ' + car.type + ' ' + car['model'] + ' car is ' + car.color + '!');
console.log('\n');
/////////////////////////////////////////////////////////////////////////////////////
let diasDaSemana = {
  1: 'domingo',
  2: 'segunda',
  3: 'terça',
  4: 'quarta',
  5: 'quinta',
  6: 'sexta',
  7: 'sábado',
};
  
// console.log(diasDaSemana.1); // SyntaxError: Unexpected number
console.log(diasDaSemana['1']); // domingo
console.log('\n');
/////////////////////////////////////////////////////////////////////////////////////
let conta = {
  agencia: '0000',
  banco: {
    cod: '012',
    id: 4,
    nome: 'TrybeBank',
  },
};

let infoDoBanco = 'banco';
console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
console.log(conta[infoDoBanco]['nome']); // TrybeBank

console.log(conta.agencia); // 0000
console.log(conta['agencia']); // 0000

console.log(conta.banco.cod); // 012
console.log(conta['banco']['id']); // 4

console.log('\n');
/////////////////////////////////////////////////////////////////////////////////////
let usuario = {
  id: 99,
  email: 'jakeperalta@gmail.com',
  infoPessoal: {
    nome: 'Jake',
    sobrenome: 'Peralta',
    endereco: {
      rua: 'Smith Street',
      bairro: 'Brooklyn',
      cidade: 'Nova Iorque',
      estado: 'Nova Iorque',
    },
  },
};

console.log(usuario['id']); // 99
console.log(usuario.email); // jakeperalta@gmail.com

console.log(usuario.infoPessoal.endereco.rua); // Smith Street
console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

console.log('\n');
/////////////////////////////////////////////////////////////////////////////////////
let moradores = [
  {
    nome: 'Luiza',
    sobrenome: 'Guimarães',
    andar: 10,
    apartamento: 1005,
  },
  {
    nome: 'William',
    sobrenome: 'Albuquerque',
    andar: 5,
    apartamento: 502,
  },
  {
    nome: 'Murilo',
    sobrenome: 'Ferraz',
    andar: 8,
    apartamento: 804,
  },
  {
    nome: 'Zoey',
    sobrenome: 'Brooks',
    andar: 1,
    apartamento: 101,
  },
];

let primeiroMorador = moradores[0];
console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
console.log(primeiroMorador['andar']); // 10

let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
console.log(ultimoMorador.nome); // Zoey

console.log('\n');
/////////////////////////////////////////////////////////////////////////////////////
// Para fixar:
// 1 - Criar objeto player
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3 },
};
// 2 - Acessar as chaves e imprimir no console a mensagem: "A jogadora Marta Silva tem 34 anos de idade"
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

// 3 - Adicionar a chave bestInTheWorld e atribuir array contendo os anos em que a jogadora foi a melhor do mundo
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
console.table(player);

// 4 - Acessar chave bestInTheWorld console.log : "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes"
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes!');

// 5 - Acessar chave medals e fazer console.log : "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata"
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

console.log('\n');
/////////////////////////////////////////////////////////////////////////////////////

// for/in:
let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars.sort()[index]);
}
console.log('\n');

let car2 = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car2) {
  console.log(index, car2[index]);
}
console.log('\n');

let food = ['hamburguer', 'bife', 'acarajé'];
for (let position in food) {
  console.log(position);
};
//resultado: 0, 1, 2;
console.log('\n');

for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;
console.log('\n');

/////////////////////////////////////////////////////////////////////////////////////
// Para fixar:
// 1 - Usando o objeto, utilizar For/in e imprimir 'Olá xxxxx' para cada nome
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};
for (key in names) {
  console.log('Olá ' + names[key] + '!');
};
console.log('\n');
// 2 - Usando o objeto, utilizar For/in e imprimir as chaves e valores do objeto
let carObj = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for (values in carObj) {
  console.log(values, ':', carObj[values]);
};
console.log('\n');
/////////////////////////////////////////////////////////////////////////////////////

// Funções:
// Sem função
let nome = 'João';

console.log('Bom dia, ' + nome);


// Com função
function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo
console.log('\n');

// Funções SEM parâmetros:
function bomDia() {
  return 'Bom dia!';
}
console.log(bomDia()); // Bom dia!
console.log('\n');

let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status); // O usuário está deslogado
console.log('\n');

// Funções COM parâmetros:
// Com função
function soma(a, b) {
  return a + b;
};
console.log(soma(5, 2)); // 7
console.log('\n');

function maiorNum(primeiroNum, segundoNum) {
  if (primeiroNum > segundoNum) {
    return primeiroNum + ' é maior que ' + segundoNum;
  } else if (segundoNum > primeiroNum) {
    return segundoNum + ' é maior que ' + primeiroNum;
  } else {
    return 'Os números são iguais';
  }
}

console.log(maiorNum(10, 20)); // 20 é maior que 10
console.log(maiorNum(2, -5)); // 2 é maior que -5
console.log(maiorNum(1, 1)); // Os números são iguais