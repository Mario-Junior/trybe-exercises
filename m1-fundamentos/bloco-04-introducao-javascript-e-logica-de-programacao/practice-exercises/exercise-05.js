/* 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo. */

const angleA = 90;
const angleB = 60;
const angleC = 30;

if (angleA <= 0 || angleB <=0 || angleC <=0) {
  console.log('ATENÇÃO! Algum ângulo é inválido!');
} else if (angleA + angleB + angleC === 180) {
  console.log(true);
} else {
  console.log(false);
}


/* GABARITO: */

let degreeAngleA = 90;
let degreeAngleB = 60;
let degreeAngleC = 30;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}
