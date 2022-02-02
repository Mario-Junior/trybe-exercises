import React from 'react';

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      api: '',
    };

    this.changeDataJson = this.changeDataJson.bind(this);
  }

  async componentDidMount() {
    const myUser = 'Mario-Junior'; // Preencha myUser com o seu user do GitHub.
    try {
      const url = `https://api.github.com/users/${myUser}`;
      const response = await fetch(url);
      const dataJson = await response.json();
      this.changeDataJson(dataJson);
    } catch (error) {
      console.log(error);
    }
  }

  componentWillUnmount() {
    alert('Você ocultou seu perfil');
  }

  changeDataJson(dataJson) {
    this.setState({ api: dataJson });
  }

  render() {
    const { api: { name, email, bio } = '', api } = this.state;

    if (!api) return <p>Loading...</p>;

    const card = (
      <div className="d-flex h-100 flex-column justify-content-center align-items-center">
        <h1>{ name }</h1>
        <span>{ email }</span>
        <img className="myPicture" src={ api.avatar_url } alt="Avatar" />
        <p>{ bio }</p>
      </div>
    );

    return (
      <div className="git d-flex flex-column justify-content-center align-items-center">
        { card }
      </div>
    );
  }
}

export default Profile;
