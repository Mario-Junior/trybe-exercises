import { Component } from 'react';
import './App.css';
import Greeting from './Greeting'

const user = {
  name: 'Mário',
  lastName: 'Júnior'
}

class App extends Component {
  render () {
    return <Greeting name={ user.name } lastName={ user.lastName } />
  }
}

export default App;
