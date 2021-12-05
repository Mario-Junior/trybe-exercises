// Criar as opções de estados no campo select e seus nomes com as siglas
function addStates() {
  const braStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Roraima', 'Rondônia', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  const braUfs = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RR', 'RO', 'RJ', 'RN', 'RS', 'SC', 'SP', 'SE', 'TO'];
  const stateSelect = document.getElementById('inputEstado');
  
  for (let i = 0; i < braStates.length; i += 1) {
    const newState = document.createElement('option');
    newState.value = braUfs[i];
    newState.innerText = braStates[i];
    stateSelect.appendChild(newState);
  }
}
addStates();

// Objeto que contém as regras de validção de todos os inputs do formulário
let inputs = {
  name: {
    maxLength: 40,
    required: true,
  },
  email: {
    maxLength: 50,
    required: true
  },
  cpf: {
    maxLength: 11,
    required: true
  },
  end: {
    maxLength: 200,
    required: true
  },
  cidade: {
    maxLength: 28,
    required: true,
  },
  estado: {
    type: 'select',
    required: true,
  },
  moradia: {
    type: 'radio',
    required: true,
  },
  resumo: {
    maxLength: 1000,
    required: true,
  },
  cargo: {
    maxLength: 40,
    required: true,
  },
  descricao: {
    maxLength: 500,
    required: true,
  },
  data: {
    type: 'date',
    required: true,
  }
}

// Validação padrão dos campos de texto e tamanho máximo de input
function defaultValidation(input, name){
  let trimmed = input.value.trim();
  let validation = inputs[name];

  if(validation.required && trimmed.length === 0){
    return false;
  }

  if(validation.maxLength && trimmed.length > validation.maxLength){
    return false;
  }
  
  return true;
}

// Validação da data para cada parte (dia, mês, ano), com mensagens customizadas
function dateValidation(input, name){
  if(input.value.length === 0){
    return {
      message: 'A data não foi preenchida!'
    }
  }

  let regex = /^\d\d\/\d\d\/\d\d\d\d$/;
  
  if(!regex.test(input.value)){
    return {
      message: 'Data: Formato inválido'
    };
  }

  let splitted = input.value.split('/');
  let day = splitted[0];
  let month = splitted[1];
  let year = splitted[2];

  if(day < 0 || day > 30){
    return {
      message: 'Dia inválido'
    };
  }

  if(month < 0 || month > 12){
    return {
      message: 'Mês inválido'
    }
  }

  if(year < 1900) {
    return {
      message: 'Ano inválido'
    };
  }

  return true;
}

// Valida o campo do tipo select (estados)
function getSelectedOption(select){
  return select.options[select.selectedIndex];
}

function selectValidation(select, name){
  let option = getSelectedOption(select);
  let validation = inputs[name];

  if(validation.required && (!option || option.disabled)){
    return false;
  }

  return true;
}

// Valida o campo do tipo radio (tipo de moradia)
function radioValidation(radio, name){
  let checked = document.querySelector(`[name=${name}]:checked`)
  
  if(checked === null){
    return false;
  }

  return true;
}

// Objeto para chamadada de cada função correspondente a validação de cada tipo de input
let validationStrategies = {
  default: defaultValidation,
  date: dateValidation,
  select: selectValidation,
  radio: radioValidation,
}

// Valida cada input se passa nos testes de cada função de verificação
function validateInput(inputName){
  let inputType = inputs[inputName].type;
  let input = document.querySelector(`[name=${inputName}]`)

  if(inputType){
    let validationFunction = validationStrategies[inputType];
    return validationFunction(input, inputName);
  }

  return validationStrategies.default(input, inputName);
}

// Renderiza as mensagens de erro em parágrafos numa div
function renderErrorMessages(messages){
  let form = document.querySelector('#curriForm');
  let messageDiv = document.createElement('div');
  messageDiv.className = 'error';
  form.prepend(messageDiv);

  for(let message of messages){
    let p = document.createElement('p');
    p.innerText = message;

    messageDiv.appendChild(p);
  }
}

// Renderiza os inputs de texto padrão
function defaultRendering(input){
  let p = document.createElement('p');
  p.innerText = input.value;

  return p;
}

// Renderiza o input radio
function radioRendering(input){
  let p = document.createElement('p');
  let name = input.getAttribute('name');
  let checked = document.querySelector(`[name=${name}]:checked`);

  if(checked){
    p.innerText = checked.value;
  }

  return p;
}

// Renderiza o input select
function selectRendering(input){
  let p = document.createElement('p');
  let option = getSelectedOption(input)
  p.innerText = option.value;
  
  return p;
}

// Objeto para chamadada de cada função de cada renderizador
let renderStrategies = {
  default: defaultRendering,
  radio: radioRendering,
  select: selectRendering,
}

// Renderiza os dados em div resumo se todos os inputs passarem nas validações
function renderData(){
  let dataDiv = document.createElement('div');
  dataDiv.className = 'data';

  let form = document.querySelector('#curriForm');
  form.prepend(dataDiv);

  for(let name in inputs){
    let inputType = inputs[name].type;
    let input = document.querySelector(`[name=${name}]`);

    let element;

    if(renderStrategies[inputType]){
      element = renderStrategies[inputType](input, dataDiv)
    } else {
      element = renderStrategies.default(input, dataDiv)
    }

    dataDiv.appendChild(element);
  }
}

// Valida os dados e cada input e constata se há erros/mensagens de erro
function validateData(){
  let validationsList = {};

  for(let inputName in inputs){
    let isValid = validateInput(inputName);
    validationsList[inputName] = isValid;
  }
  
  let counter = 0;
  let messages = [];

  for(let index in validationsList){
    if(validationsList[index] === false){
      counter += 1;
    }

    if(validationsList[index].message){
      counter += 1;
      messages.push(validationsList[index].message);
    }
  }

  return {
    errorQtd: counter,
    messages,
  }
}

// Apaga os campos oriundos de erros
function clearDivs(){
  let errorDivs = document.querySelectorAll('.error');

  for(div of errorDivs){
    div.remove();
  }

  let dataDiv = document.querySelector('.data');

  if(dataDiv){
    dataDiv.remove();
  }
}

// Envia os dados para apresentação ou se houver erros, mostra as mensagens
function handleSubmit(event) {
  event.preventDefault();

  let validation = validateData();

  clearDivs();
  
  if(validation.errorQtd === 0){
    renderData();
  } else {
    validation.messages.unshift('Dados Inválidos')

    renderErrorMessages(validation.messages)
  }
}

// Limpa os campos ao clique no botão Limpar
function clearFields() {
  let formElements = document.querySelectorAll('input');
  let state = document.querySelector('.state');
  let radio = document.querySelector('[name=moradia]');
  let textArea = document.querySelector('textarea');
  let div = document.querySelector('.data');
  for (let index = 0; index < formElements.length; index += 1) {
    let userInput = formElements[index];
    userInput.value = '';
    radio.checked = false;
    textArea.value = '';
    div.remove();
  }
}

// Adiciona os estados ao campo select e carrega os botões ao carregar a página
window.onload = function() {
  addStates();
  let submitButton = document.querySelector('.submit-button');
  submitButton.addEventListener('click', handleSubmit);

  let clearButton = document.querySelector('.clear-button');
  clearButton.addEventListener('click', clearFields);
}
