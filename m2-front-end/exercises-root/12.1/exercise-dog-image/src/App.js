import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dog: {},
      dogName: '',
      array: [],
      loading: true,
    }
  }

  async componentDidMount() {
    try {
      const require = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await require.json();

      this.setState({ 
        dog: data,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const noBreed = 'terrier';

    if (nextState.dog.message.includes(noBreed)) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
      const { dog } = this.state;
      const breed = dog.message.split('/')[4];
    console.log(prevState.dog, this.state.dog);
    if (prevState.dog !== this.state.dog) {
      alert(breed);
    }
  }

  refreshPage = () => window.location.reload();

  saveDog = () => {
    const {
      dog: { message },
      dogName,
      array
    } = this.state;
    const dogData = { message, dogName };
    const newArray = [...array, dogData];
    this.setState({ array: newArray });
    this.setState({ dogName: '' });
    localStorage.setItem('namedDogUrl', JSON.stringify(newArray));
  };

  render() {
    const { dog, loading } = this.state;
    const loadingElement = <p><span role="img" aria-label="dog">🐶 Loading...</span></p>
    const dogImg = <div className='dog-img'><img src={dog.message} alt="doguinho"></img></div>
    return(
      <section>
        <div className="controller">
          <button type="button" onClick={this.refreshPage}>Novo Doguinho</button>
          <input
            type="text"
            name="dogName"
            value={ this.state.dogName }
            placeholder="Dê nome ao Doguinho"
            onChange={ event => this.setState({ dogName: event.target.value })}
          />
          <button type="button" onClick={this.saveDog}>Salvar Doguinho</button>
        </div>
        { loading ? loadingElement : dogImg }
      </section>
    )
  }
}

export default App;
