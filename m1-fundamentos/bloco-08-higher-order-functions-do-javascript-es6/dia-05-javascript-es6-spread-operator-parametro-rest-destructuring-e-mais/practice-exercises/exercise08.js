// 8 - Escrever função greet que, dado o nome, retorna uma mensagem de cumprimento:
// Dica: use default params
// escreva greet abaixo
const greet = (name = 'user', greeting = 'Hi') => `${greeting} ${name}!`;

console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'
console.log(greet('Mario', 'Hello')); // 'Hello Mario'
console.log(greet()); // 'Hi user'
