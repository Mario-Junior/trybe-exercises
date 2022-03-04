// src/App.js
import React from 'react';
// import { Provider } from 'react-redux'; // Provider e store passadas para o index.js
// import store from './store'; // Provider e store passadas para o index.js
import ButtonClicks from './ButtonClicks';
import NumberClicks from './NumberClicks';

class App extends React.Component {
  render() {
    return (
      <div>
        <ButtonClicks />
        <NumberClicks />
      </div>
    );
  }
}
export default App;
