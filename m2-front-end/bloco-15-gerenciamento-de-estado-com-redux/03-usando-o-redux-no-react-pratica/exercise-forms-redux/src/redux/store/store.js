import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import personalReducer from '../reducers/personalReducer';
import professionalReducer from '../reducers/professionalReducer';

const rootReducer = combineReducers({ personalReducer, professionalReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
