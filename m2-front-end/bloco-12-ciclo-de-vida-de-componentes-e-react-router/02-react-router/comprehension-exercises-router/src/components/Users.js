import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingsMessage } = this.props;
    const { id } = this.props.match.params;
    console.log(this.props);
    return (
      <div>
        <h2>Users</h2>
        <p> { id }, { greetingsMessage }, My awesome Users component </p>
      </div>
    );
  }
};

export default Users;
