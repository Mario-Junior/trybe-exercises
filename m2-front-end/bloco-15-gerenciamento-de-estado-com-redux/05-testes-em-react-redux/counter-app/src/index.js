import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
// import * as serviceWorker from './serviceWorker';

// Store provido pela nossa aplicação. Nos testes, precisamos prover um novo store para podermos controlá-lo

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorker.unregister();
