// 9 - O objeto yearSeasons representam as estações do ano (com base no hemisfério norte). Cada estação é chave do objeto e o valor de cada chave é array de strings, representando os meses da estação. A partir do objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano.
// Dica : use object destructuring e spread operator

const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const yearMonths = ( {spring, summer, autumn, winter} ) => [...spring, ...summer, ...autumn, ...winter];
console.log(yearMonths(yearSeasons));

// Gabarito:
const { spring, summer, autumn, winter } = yearSeasons;
const months = [...spring, ...summer, ...autumn, ...winter];

console.log(months); // ['March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February']
