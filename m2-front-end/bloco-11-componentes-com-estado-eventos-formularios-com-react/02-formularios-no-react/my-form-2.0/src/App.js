import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import FormError from './FormError';
import FormDataDisplay from './FormDataDisplay';

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

  changeHandler = event => {
    let { name, value } = event.target;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAddress(value);

    this.updateState(name, value);
  }

  onBlurHandler = event => {
    let { name, value } = event.target;

    if (name === 'city') value = value.match(/^\d/) ? '' : value;

    this.updateState(name, value);
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
      formError: {
        ... state.formError,
        [name]: this.validateField(name, value)
      }
    }));
  }

  validateAddress = address => address.replace(/[^\w\s]/gi, '');

  handleSubmit = event => {
    event.preventDefault();
  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
        return isValid ? '' : ' is invalid';
      default:
        break;
    }
    return '';
  }

  resetForm = () => { this.setState(initial_state) };

  sendForm = () => { this.setState({ submitted: true }) };

  render() {
    const { submitted } = this.state;

    return (
      <main>
        <Form
          sendForm={this.sendForm}
          resetForm={this.resetForm}
          changeHandler={this.changeHandler}
          currentState={this.currentState}
          onBlurHandler={this.onBlurHandler}
        />
        <div className="container">
          <FormError formError={this.state.formError} />
        </div>
        { submitted && <FormDataDisplay currentState={ this.state } /> }
      </main>
    );
  }
}

export default App;
