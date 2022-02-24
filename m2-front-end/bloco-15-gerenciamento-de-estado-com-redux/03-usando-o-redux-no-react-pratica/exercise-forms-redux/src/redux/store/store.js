import { createStore, combineReducers } from 'redux';
import infoReducer from '../reducers';

const rootReducer = combineReducers({ infoReducer });

const store = createStore(rootReducer);

export default store;
