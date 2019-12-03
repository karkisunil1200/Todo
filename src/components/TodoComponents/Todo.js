import React, {Component} from 'react';

class Todo extends Component {
  render() {
    return (
      <div className='todoContainer'>
        <div className='todo'>
          <p>Id: {this.props.item.id}</p>
          <p>Task: {this.props.item.task}</p>
          <p>Completed: {this.props.item.completed}</p>
        </div>
      </div>
    );
  }
}

export default Todo;
