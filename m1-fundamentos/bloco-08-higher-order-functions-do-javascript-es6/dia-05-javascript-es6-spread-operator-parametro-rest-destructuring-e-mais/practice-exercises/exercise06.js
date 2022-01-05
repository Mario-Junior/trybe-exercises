// 6 - Suponha carros e, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Criar função toObject que, dada uma lista, retorna um objeto representando o carro:
// Dica: usar array destructuring e abbreviation object literal
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const vehicles = [palio, shelbyCobra, chiron];

const toObject = ([model, manufacturer, year]) => ( {model, manufacturer, year} )  
vehicles.forEach(vehicle => { return console.log(toObject(vehicle)) });
