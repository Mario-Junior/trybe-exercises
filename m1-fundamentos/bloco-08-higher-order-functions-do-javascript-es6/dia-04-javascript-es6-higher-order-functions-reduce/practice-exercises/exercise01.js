// 1 - Dada matriz, transforme em array
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr), []); 
}
console.log(flatten(arrays));
// array.concat = https://mzl.la/3JpIekF
