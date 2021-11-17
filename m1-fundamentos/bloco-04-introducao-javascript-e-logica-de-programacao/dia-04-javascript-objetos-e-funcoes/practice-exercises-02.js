// Parte I - Objetos e For/In
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log('\n');
// 1 - Imprimir mensagem de boas-vindas para a personagem acima, incluindo seu nome (Bem-vinda, Margarida)
function exOne() {
  return 'Bem-vinda, ' + info.personagem;
};
console.log(exOne());
console.log('\n');
// 2 - Insirir no objeto nova propriedade com nome de chave 'recorrente' valor 'Sim' e, imprimir o objeto
info.recorrente = 'Sim';
console.table(info);
console.log('\n');
// 3 - Fazer for/in que mostre todas as chaves
for(keys in info) {
  console.log(keys);
};
console.log('\n');
// 4 - Fazer novo for/in , agora mostre todos os valores das chaves
for(keyValues in info) {
  console.log(info[keyValues]);
};
console.log('\n');
// 5 - Definir segundo objeto com a mesma estrutura  do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};
console.table(info2);
console.log('\n');

for(let infoKeys in info) {
  if ( infoKeys === 'recorrente' && info[infoKeys] === 'Sim' && info2[infoKeys] === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
  console.log(info[infoKeys] + ' e ' + info2[infoKeys]);
  }
};
console.log('\n');

// Usando o objeto abaixo para os próximos exercícios
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
// 6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e imprima: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'"
console.log("O livro favorito de", leitor.nome, leitor.sobrenome, "se chama", "'" + leitor.livrosFavoritos[0].titulo + "'");

// 7 - Adicionar novo livro favorito na chave livrosFavoritos , que é um array . Atribuir a esta chave um objeto contendo as seguintes informações
// {
//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editor: 'Rocco',
// }
leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
  }
);
console.log(leitor);
console.table(leitor.livrosFavoritos);

// 8 - Acessar as chaves nome e livrosFavoritos e imprimir : "Julia tem 2 livros favoritos"
console.log('Julia tem', leitor.livrosFavoritos.length, 'livros favoritos' + '.');