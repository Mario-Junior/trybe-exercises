// arquivo script.js
// 1. Acessar elemento elementoOndeVoceEsta
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
elementoOndeVoceEsta.style.backgroundColor = 'PaleGreen';

// 2. Acessar pai a partir de elementoOndeVoceEsta e adicionar uma color a ele
let pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'blue';

// 3. Acessar o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Texto adicionado com sucesso ao referido elemento!';

// 4. Acesse o primeiroFilho a partir de pai
let primeiroFilho = pai.firstElementChild;
primeiroFilho.innerText = 'Número 4 feito com sucesso!';

// 5.Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta
let primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;
primeiroFilho2.style.backgroundColor = 'yellow';

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta 
let textElement = elementoOndeVoceEsta.nextSibling;
textElement.innerText = 'Texto novo de teste'; //Porque não funciona???

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta
let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
terceiroFilho.innerText = 'Número 7 feito com sucesso!';

// 8. Agora acesse o terceiroFilho a partir de pai
let terceiroFilho2 = pai.lastElementChild.previousElementSibling;
terceiroFilho2.style.color = 'DeepPink';