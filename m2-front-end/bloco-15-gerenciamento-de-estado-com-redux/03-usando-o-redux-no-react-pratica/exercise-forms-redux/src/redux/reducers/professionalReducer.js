const INITIAL_STATE = {
  curriculo: '',
  cargo: '',
  descricao: '',
};

const professionalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_INFO':
    return { ...state,
      curriculo: action.value,
      cargo: action.value,
      descricao: action.value,
    };
  default:
    return state;
  }
};

export default professionalReducer;
