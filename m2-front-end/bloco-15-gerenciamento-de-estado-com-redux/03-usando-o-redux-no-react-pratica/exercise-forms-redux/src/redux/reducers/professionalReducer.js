const INITIAL_STATE = {
  curriculo: '',
  cargo: '',
  descricao: '',
};

const professionalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_INFO':
    return { ...state,
      curriculo: action.curriculo,
      cargo: action.cargo,
      descricao: action.descricao,
    };
  default:
    return state;
  }
};

export default professionalReducer;
