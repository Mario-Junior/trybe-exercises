import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      isLoading: true,
    };
  }
  
  // Requisição POST (Create) no front-end
  onClickCreateItem = () => {
    fetch('http://localhost:3001/recipes/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 4,
        name: 'Macarrão com Frango',
        price: 30
      })
    });
    document.location.reload(true);
  }

  componentDidMount() {
    // Requisição GET (Read) no front-end
    fetch('http://localhost:3001/recipes')
      .then(response => response.json())
      .then((recipes) => this.setState(
        {
          recipes,
          isLoading: false,
        },
      ));
  }

  // Requisição PUT (Update) no front-end
  onClickUpdateItem = () => {
    fetch('http://localhost:3001/recipes/2', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Macarrão ao alho e óleo',
        price: 40
      })
    });
    document.location.reload(true);
  }

  // Requisição DELETE (Delete) no front-end
  onClickDeleteItem = () => {
    fetch('http://localhost:3001/recipes/4', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });
    document.location.reload(true);
  }

  render() {
    const { recipes, isLoading } = this.state;

    return (
      <div>
        <div>
          {isLoading && <h1>Loading...</h1>}
          <div className='card-group'>
            {recipes.map((recipe) => (
              <div key={recipe.id}>
                <h1>{recipe.name}</h1>
                <span>Preço: {recipe.price}</span>
                <span>Tempo de preparo: {recipe.waitTime}</span>
              </div>
            ))}
          </div>
          <button
            type='button'
            onClick={ this.onClickCreateItem }
          >
            Create Item
          </button>
          <button
            type='button'
            onClick={ this.onClickUpdateItem }
          >
            Update Item
          </button>
          <button
            type='button'
            onClick={ this.onClickDeleteItem }
          >
            Delete Item
          </button>
        </div>
      </div>
    );
  }
}

export default App;
