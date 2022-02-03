import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      dog: {},
      loading: true,
    }
  }

  async componentDidMount() {
    try {
      const require = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await require.json();

      console.log(data.message.split('/'));
      this.setState({ 
        dog: data,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const noBreed = 'terrier';

    if (nextState.dog.message.includes(noBreed)) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    const { dog } = this.state;
    const breed = dog.message.split('/')[4];

    localStorage.setItem("dogUrl", dog.message);
    alert(breed);
  }

  refreshPage = () => window.location.reload();

  saveDog = () => {};

  render() {
    const { dog, loading } = this.state;
    const loadingElement = <p><span role="img" aria-label="dog">🐶 Loading...</span></p>
    const dogImg = <div className='dog-img'><img src={dog.message} alt="doguinho"></img></div>
    return(
      <section>
        <div className="controller">
          <button type="button" onClick={this.refreshPage}>Novo Doguinho</button>
          <input type="text" name="dog-name" placeholder="Dê nome ao Doguinho" />
          <button type="button" onClick={this.saveDog}>Salvar Doguinho</button>
        </div>
        { loading ? loadingElement : dogImg }
      </section>
    )
  }
}

export default App;
