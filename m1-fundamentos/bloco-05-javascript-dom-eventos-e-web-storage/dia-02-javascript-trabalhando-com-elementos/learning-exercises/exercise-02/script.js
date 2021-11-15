// arquivo script.js
// 1. Acessar elemento elementoOndeVoceEsta
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// 2. Acessar pai a partir de elementoOndeVoceEsta e adicionar uma color a ele
let pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'blue';

// 3. Acessar o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Texto adicionado com sucesso ao referido elemento!';

// 4. Acesse o primeiroFilho a partir de pai
let primeiroFilho = pai.firstElementChild;

// 5.Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta
let primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta 
let text = elementoOndeVoceEsta.nextSibling;

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta
let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// 8. Agora acesse o terceiroFilho a partir de pai
let terceiroFilho2 = pai.lastElementChild.previousElementSibling;