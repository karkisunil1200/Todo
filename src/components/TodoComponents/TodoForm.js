import React, {Component} from 'react';
import {setState} from 'expect/build/jestMatchersObject';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      todo: '',
      id: Date.now(),
      completed: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log([e.target.name], e.target.value);
  };

  render() {
    return (
      <div>
        <input type='text' onChange={this.handleChange} value={this.state.todo} name='todo' />
        <button type='btn'>Add to do</button>
      </div>
    );
  }
}

export default TodoForm;
