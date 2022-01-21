import React, { Component } from 'react';

const textJSX = <h1>Hello JSX!</h1>

class MyName extends Component {
  render() {
    return (
    <div className='Text'>
      <h1>Mário Júnior</h1>
      <p>An eternal learner!</p>
      <h2>Hello, World!!!</h2>
      <p>Let's learn React!</p>
    </div>
    )
  }
}

export default MyName;
