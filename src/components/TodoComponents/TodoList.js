// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, {Component} from 'react';

import Todo from './Todo';

class TodoList extends Component {
  render() {
    return (
      <>
        <h2>This is the to do list</h2>;<h5>These are you todos</h5>
        <div className='todolist'>
          {this.props.data.map(item => {
            return <Todo item={item} />;
          })}
        </div>
      </>
    );
  }
}
export default TodoList;
