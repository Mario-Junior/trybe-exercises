import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dog: '',
      dogName: '',
      array: [],
      savedName: ''
    }
  }

  fetchDog = async () => {
    try {
      const require = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await require.json();

      this.setState({ 
        dog: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    if (localStorage.namedDogUrl) {
      const parseStorage = JSON.parse(localStorage.namedDogUrl);
      const lastDog = parseStorage[parseStorage.length - 1].message;
      const name = parseStorage[parseStorage.length - 1].dogName;

      this.setState({
        array: parseStorage,
        dog: { message: lastDog },
        savedName: name,
      });
    } else {
      this.fetchDog();
    }
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const noBreed = 'terrier';

    if (nextState.dog.message.includes(noBreed)) {
      return false;
    }
    return true;
  }

  componentDidUpdate(_prevProps, prevState) {
      const { dog } = this.state;
      const breed = dog.message.split('/')[4];
    if (prevState.dog !== this.state.dog) {
      alert(breed);
    }
  }

  saveDog = () => {
    const {
      dog: { message },
      dogName,
      array
    } = this.state;
    const dogData = { message, dogName };
    const newArray = [...array, dogData];

    if (!dogName) {
      alert('Dê um nome ao Doguinho!');
    } else {
      this.setState({ array: newArray });
      this.setState({ dogName: '' });
      localStorage.setItem('namedDogUrl', JSON.stringify(newArray));
    }
  };

  render() {
    const { dog } = this.state;
    const loadingElement = <p><span role="img" aria-label="dog">🐶 Loading...</span></p>
    const dogImg = <div className='dog-img'><img src={dog.message} alt='doguinho'></img></div>

    if (dog === '') return loadingElement;

    return(
      <section>
        <div className="controller">
          <button type="button" onClick={this.fetchDog}>Novo Doguinho</button>
          <input
            type="text"
            name="dogName"
            value={ this.state.dogName }
            placeholder="Dê nome ao Doguinho"
            onChange={ event => this.setState({ dogName: event.target.value })}
          />
          <button type="button" onClick={this.saveDog}>Salvar Doguinho</button>
        </div>
        { dogImg }
        <span>{ this.state.savedName }</span>
      </section>
    )
  }
}

export default App;
