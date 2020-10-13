import React, { Component } from 'react';

export class Search extends Component {


  render() {
    return (
      <input id="search" type="text" value={this.props.value} onChange={this.props.change} />
    );
  }
}


export default Search;