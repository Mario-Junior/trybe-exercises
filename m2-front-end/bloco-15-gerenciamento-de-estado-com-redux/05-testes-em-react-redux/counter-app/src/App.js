// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ButtonClicks from './ButtonClicks';
import NumberClicks from './NumberClicks';

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ButtonClicks />
          <NumberClicks />
        </Provider>
      </div>
    );
  }
}
export default App;
