import React, { Component } from 'react';
import './App.css';

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

  constructor(props){
    super(props); //before calling this a call to super is must
    this.state ={ //state is an object ! not a function
      booksl: list,
    };
    this.reflectChange = this.reflectChange.bind(this);// needed if we need to access this
  }


  reflectChange (event) {
    console.log(event.target.value);
    console.log(this);
  }
  render() {

    // const reflectChange = (event) => {
    //   console.log(event.target.value);
    // }

    return (
      <div className="App">
        <p>{welcome.greeting} {welcome.title}</p>
        <label htmlFor="search">Search : </label>
        <input id="search" type="text" onChange={this.reflectChange}/>
        <hr />
        <List booklist={this.state.booksl} />
      </div>
    );
  }
}


class List extends Component {

  render() {
    return (
      <div>
        {
          this.props.booklist.map(item => {
            return <div key={item.objectID}>
              <a href={item.url}>{item.title}</a>
              <span>{item.author}</span>
              <span>{item.points}</span>
              <span>{item.num_comments}</span>
            </div>
          })
        }
      </div>
    );
  }
}

export default App;
