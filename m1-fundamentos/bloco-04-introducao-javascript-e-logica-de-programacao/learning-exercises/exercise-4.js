const comida = 'pão na chapa';
const bebida = 'cafezinho';

if (bebida === 'cafezinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}
console.log('\n');

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);
console.log('\n');

const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;

console.log(listaDeCompras);
console.log('\n');

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log('\n');

const currentHour = 3;
let message;

if (currentHour >= 22) {
  console.log("Não deveríamos comer nada, é hora de dormir");
} else if (currentHour >= 18 && currentHour < 22) {
  console.log("Rango da noite, vamos jantar :D");
} else if (currentHour >= 14 && currentHour < 18) {
  console.log("Vamos fazer um bolo pro café da tarde?");
} else if (currentHour >= 11 && currentHour < 14) {
  console.log("Hora do almoço!!!");
} else if (currentHour >= 4 && currentHour < 11) {
  console.log("Hmmm, cheiro de café recém passado");
}
console.log('\n');

const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}
console.log('\n');

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log('\n');

let weekDay = "sexta-feira";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
  console.log("FINALMENTE, descanso merecido UwU");
}
console.log('\n');
