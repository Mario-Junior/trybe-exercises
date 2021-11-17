/* 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais) */

let chessPiece = 'KING';

if (chessPiece.toLowerCase() == 'bishop') {
  console.log('bishop -> diagonals (all board)');
} else if (chessPiece.toLowerCase() == 'horse') {
  console.log('horse -> L move (can jump other pieces)');
} else if (chessPiece.toLowerCase() == 'king') {
  console.log('king -> all squares around (one a one)');
} else if (chessPiece.toLowerCase() == 'pawn') {
  console.log('pawn -> one square ahead (or two only at first move)');
} else if (chessPiece.toLowerCase() == 'queen') {
  console.log('queen -> all squares around (all board)');
} else if (chessPiece.toLowerCase() == 'rook') {
  console.log('rook -> horizontal or vertical (all board)');
} else {
  console.log('Error, invalid piece!');
}

/* GABARITO */

switch (chessPiece.toLowerCase()) {
  case 'king':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bishop':
    console.log('Bispo-> Diagonal.');
    break;
  case 'queen':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'horse':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'rook':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'pawn':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
}
