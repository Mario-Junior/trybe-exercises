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

// Parte II - Criando elementos
// Prática? Aqui!

// 1. Crie um irmão para elementoOndeVoceEsta
let elementoOndeVoceEstaBro = document.createElement('section');
elementoOndeVoceEstaBro.innerText = 'Irmão para elementoOndeVoceEsta'
pai.appendChild(elementoOndeVoceEstaBro);

// 2. Crie um filho para elementoOndeVoceEsta
let elementoOndeVoceEstaSon = document.createElement('p');
elementoOndeVoceEstaSon.innerText = 'Filho para elementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(elementoOndeVoceEstaSon);

// 3. Crie um filho para primeiroFilhoDoFilho
let primeiroFilhoDoFilhoSon = document.createElement('h4');
primeiroFilhoDoFilhoSon.innerText = 'Filho para primeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(primeiroFilhoDoFilhoSon);

// 4. A partir desse filho criado, acesse terceiroFilho
terceiroFilho = primeiroFilhoDoFilhoSon.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);


/* Parte III - Removendo elementos
Para praticar: Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho */
pai.removeChild(primeiroFilho);
pai.removeChild(terceiroFilho);
pai.removeChild(quartoEUltimoFilho);
pai.removeChild(elementoOndeVoceEstaBro);
elementoOndeVoceEsta.removeChild(segundoEUltimoFilhoDoFilho);

// GABARITO:
// const pai = document.getElementById('pai');

//     for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
//       const currentChildren = pai.childNodes[index];
//       if (currentChildren.id !== 'elementoOndeVoceEsta') {
//         currentChildren.remove();
//       }
//     }

//     const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
//     segundoEUltimoFilhoDoFilho.remove();