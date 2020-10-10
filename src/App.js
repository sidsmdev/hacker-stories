import React from 'react';
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

function App() {
  return (
    <div className="App">
      <p>{welcome.greeting} {welcome.title}</p>
      <label htmlFor="search">Search : </label>
      <input id="search" type="text" />
      <hr />

      <List/>
    </div>
  );
}


function List() {
  return (
    <div>
      {
        list.map(item => {
          return <div key={item.objectID}>
            <a href={item.url}>{ item.title}</a>
            <span>{item.author}</span>
            <span>{item.points}</span>
            <span>{item.num_comments}</span>
          </div>
        })
      }
    </div>
  );
}

export default App;
