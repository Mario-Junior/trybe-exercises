import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTodo: [],
      selectedTodo: [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.selectTodo = this.selectTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  selectTodo(todo) {
    const { selectedTodo } = this.state;
    if (!selectedTodo.includes(todo)) {
      return this.setState((state) => ({ selectedTodo: [...state.selectedTodo, todo] }));
    }
    const filteredSelected = selectedTodo.filter((item) => item !== todo);
    this.setState({ selectedTodo: filteredSelected });
  }

  removeTodo(todo) {
    const { selectedTodo, listTodo } = this.state;
    if (selectedTodo.includes(todo)) {
      const filteredList = listTodo.filter((item) => item !== todo);
      const filteredSelected = selectedTodo.filter((item) => item !== todo);
      this.setState({ listTodo: filteredList });
      this.setState({ selectedTodo: filteredSelected });
    }
  }

  render() {
    const { listTodo, selectedTodo } = this.state;

    return (
      <div className="App">
        <InputTodo addTodo={ (todo) => this.addTodo(todo) } />
        {
          listTodo
          && <ul>
            {
              listTodo.map((todo, index) => (
                <li key={ index + 1 }>
                  <Item content={ todo } selectCallBack={ this.selectTodo } />
                  <button
                    disabled={ !selectedTodo.includes(todo) }
                    type="button"
                    onClick={ () => this.removeTodo(todo) }
                  >
                    Remover
                  </button>
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}
export default App;
