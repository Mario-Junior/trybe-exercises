/* 10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto) */

const productCost = 10;
const saleValue = 100;
const tax = 0.2;
let unitsSold = 1000;
let totalCost = productCost * (1 + tax);
console.log('Sale Unit value = ' + saleValue);
console.log('Total Cost = ' + totalCost);
let profit;
let totalProfit;

profit = saleValue - totalCost;
console.log('Unit profit = ' + profit);
console.log('Units sold = ' + unitsSold);

totalProfit = profit * unitsSold;
console.log('Total Profit = ' + totalProfit);

if (productCost >=0 && saleValue >=0) {
  console.log('Total Profit = ' + totalProfit);
} else {
  console.log('Error! Input values ​​cannot be negative!'); 
}
