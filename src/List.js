import React, { Component } from 'react';
import { Button } from "./Button";

export class List extends Component {



  render() {


    return (
      <div>
        {this.props.listOfBooks.filter((item) => {
          return item.title.toLowerCase().includes(this.props.searchTerm.toLowerCase());
        }
        ).map(item => {
          return <div key={item.objectID}>
            <a href={item.url}>{item.title}</a>
            <span>{item.author}</span>
            <span>{item.points}</span>
            <span>{item.num_comments}</span>
            <span>
              <Button dismiss={this.props.dismiss} id={item.objectID}>
                Dismiss
                </Button>
            </span>
          </div>;
        })}
      </div>
    );
  }
}

export default List;