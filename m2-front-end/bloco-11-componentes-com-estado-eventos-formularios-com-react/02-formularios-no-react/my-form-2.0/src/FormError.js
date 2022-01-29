import React, { Component } from 'react';

class FormError extends Component {
  render() {
    const { formError } = this.props;
    return (
      <div>
        {
          Object.keys(formError).filter((fieldName) => (
            formError[fieldName].length > 0
          )).map((fieldName, i) => (
            <p key={ i }>
              { fieldName }
              { formError[fieldName] }
            </p>
          ))
        }
      </div>
    );
  }
}

export default FormError;
