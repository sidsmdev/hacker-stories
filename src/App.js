import React, { Component } from 'react';
import './App.css';
import { List } from './List';
import { Search } from './Search';

const welcome = {
  greeting: "Hello : ",
  title: "Welcome to my Hacker Stories ! ",
};

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      booksl: list,
      keyed: "React",
    };

  }
  onSearchChange = (event) => {
    console.log(event.target.value)
    this.setState({
      keyed: event.target.value

    });

  }

  onDismiss = (id) => {
    var updatedlist = this.state.booksl.filter(item => {
      console.log(item.objectID + ' ' + id);
      return item.objectID !== id;
    });

    this.setState({
      booksl: updatedlist,
    })

  }

  render() {

    return (
      <div className="App">
        <p>{welcome.greeting} {welcome.title}</p>
        <label htmlFor="search">Search : </label>
        <Search change={this.onSearchChange} value={this.state.keyed} />
        <hr />
        <List searchTerm={this.state.keyed} listOfBooks={this.state.booksl} dismiss={this.onDismiss} />
      </div>
    );
  }
}


export default App;
