import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingsMessage } = this.props;
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    return (
      <div>
        <h2>Users</h2>
        <p> 
          { greetingsMessage }, { id }, this is our awesome Users component
        </p>
      </div>
    );
  }
};

export default Users;
