import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      user: {},
      loading: true,
    }
  }

  async componentDidMount() {
    try {
      const require = await fetch('https://api.randomuser.me/');
      const data = await require.json();

      this.setState({ 
        user: data.results[0],
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const AGE = 50;

    if (nextState.user.dob.age > AGE) {
      return false;
    }
    return true;
  }

  getUserData = (user) => {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.large,
    }
  }

  renderUser = (data) => {
    return (
      <div>
        <img src={ data.image } alt={ data.name } />
        <p>{data.name}</p>
        <p>{data.email}</p>
        <p>{data.age}</p>
      </div>
    );
  }

  render() {
    const { user, loading } = this.state;
    const loadingElement = <p>loading...</p>;
    return (
      <div>
        { loading ? loadingElement : this.renderUser(this.getUserData(user)) }
      </div>
    );
  }  
}

export default App;
