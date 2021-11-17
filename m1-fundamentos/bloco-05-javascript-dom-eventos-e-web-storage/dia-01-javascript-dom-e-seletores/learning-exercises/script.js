/* Consolidar a manipulação dos elementos HTML , colocando cor no Administrador de Tempo da Trybe como na imagem, usando apenas o JavaScript! */

document.getElementsByTagName('h1')[0].style.backgroundColor = 'MediumSeaGreen';
document.getElementsByTagName('h1')[0].style.height = '60px';
document.getElementsByTagName('h1')[0].style.paddingTop = '20px';

document.querySelector('.emergency-tasks').style.backgroundColor = 'LightSalmon';
document.querySelector('.no-emergency-tasks').style.backgroundColor = 'Yellow';

document.querySelectorAll('.emergency-tasks h3')[0].style.backgroundColor = 'MediumOrchid';
document.querySelectorAll('.emergency-tasks h3')[1].style.backgroundColor = 'MediumOrchid';
document.querySelectorAll('.no-emergency-tasks h3')[0].style.backgroundColor = 'Black';
document.querySelectorAll('.no-emergency-tasks h3')[1].style.backgroundColor = 'Black';

document.getElementById('footer-container').style.backgroundColor = 'DarkSlateGrey';
document.getElementById('footer-container').style.marginInline = '20px';