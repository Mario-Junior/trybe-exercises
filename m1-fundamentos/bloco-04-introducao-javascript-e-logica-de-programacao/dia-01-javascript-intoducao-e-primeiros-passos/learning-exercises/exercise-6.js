let trafficLight;
trafficLight = 'verde';

switch (trafficLight) {
  case 'vermelho':
    console.log('pare');
    break;

  case 'amarelo':
    console.log('atenção');
    break;

  case 'verde':
    console.log('siga');
    break;

  default:
    console.log('valor não identificado');
    break;
}
console.log('\n');

let statusStudent;
statusStudent = 'aprovada';

switch (statusStudent) {
  case 'aprovada':
    console.log('aprovada');
    break;

  case 'lista':
    console.log('lista');
    break;

  case 'reprovada':
    console.log('reprovada');
    break;

  default:
    console.log('não se aplica');
    break;
}
