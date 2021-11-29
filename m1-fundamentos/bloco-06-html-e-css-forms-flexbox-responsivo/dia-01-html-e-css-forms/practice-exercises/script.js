// 6.1 Practice Exercises
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
