const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
};

const personalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_INFO':
    return { ...state,
      ...action.value,
    };
  default:
    return state;
  }
};

export default personalReducer;
