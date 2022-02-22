const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const primeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case 'ALTERAR_PRIMEIRO_NOME_E_SOBRENOME':
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome,
      };
    default:
      return state;
  }
};

const segundoReducer = (state = ESTADO_INICIAL_2, action) => {
switch (action.type) {
  case 'ALTERAR_SEGUNDO_NOME_E_SOBRENOME':
    return {
      ...state,
      nome: action.nome,
      sobrenome: action.sobrenome,
    };
  default:
    return state;
}
};

const mainReducer = Redux.combineReducers({ primeiroReducer, segundoReducer });

const store = Redux.createStore(mainReducer);
