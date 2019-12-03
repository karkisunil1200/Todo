import React, {Component} from 'react';

import './Todo.css';

class Todo extends Component {
  constructor() {
    super();
  }

  toggle = () => {};

  render() {
    return (
      <div className='todoContainer'>
        <div
          onClick={this.toggle}
          className={`item${this.props.item.completed ? ' completed' : ''} `}
        >
          <p>Id: {this.props.item.id}</p>
          <p>Task: {this.props.item.task}</p>
          <p>Completed: {this.props.item.completed}</p>
        </div>
      </div>
    );
  }
}

export default Todo;
