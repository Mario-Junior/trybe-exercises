const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
  curriculo: '',
  cargo: '',
  descricao: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_INFO':
    return { ...state,
      ...action.value,
    };
  default:
    return state;
  }
};

export default userReducer;
