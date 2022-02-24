import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import infoReducer from '../reducers/reducer';

const rootReducer = combineReducers({ infoReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
