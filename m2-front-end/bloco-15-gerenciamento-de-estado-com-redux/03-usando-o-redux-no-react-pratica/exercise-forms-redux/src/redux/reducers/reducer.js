const INITIAL_STATE = {
  state: '',
};

const infoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'INFO_ACTION':
    return { state };
  default:
    return state;
  }
};

export default infoReducer;
