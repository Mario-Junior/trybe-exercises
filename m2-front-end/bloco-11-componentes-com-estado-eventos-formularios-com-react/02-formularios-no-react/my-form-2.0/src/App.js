import React, { Component } from 'react';
import './App.css';
import Form from './Form';

const initial_state = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addresType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  sudmitted: false,
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initial_state;
  }

  render() {
    return (
      <>
        <Form />
      </>
    )
  }
}

export default App;
