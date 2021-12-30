// 5 - Dado array de nomes, retornar quantidade de vezes em que aparece a letra 'a' maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  let a = 0;
  const phrase = names.reduce((acc, curr) => acc + curr);
  for (let i = 0; i < phrase.length; i += 1) { phrase[i] === 'A' || phrase[i] === 'a' ? a += 1 : a };
  return a;
}
console.log(containsA());

// Gabarito:
function containsA() {
  return names.reduce((acc, curr) =>
     acc + curr.split('').reduce((acumulator, current) => {
        if (current === 'a' || current === 'A') return acumulator + 1;
        return acumulator;
     }, 0), 0);
}
console.log(containsA());
