import React, { Component } from 'react';



export class Button extends Component {

  render() {

    return (

      <button onClick={() => this.props.dismiss(this.props.id)}>
        {this.props.children}
      </button>

    );
  }
}

export default Button;