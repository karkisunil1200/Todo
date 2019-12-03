import React, {Component} from 'react';
import {setState} from 'expect/build/jestMatchersObject';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      todo: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addItems(this.state.todo);

    this.setState({
      todo: ''
    });
  };

  clearList = e => {
    e.preventDefault();
    this.props.clear();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange} value={this.state.todo} name='todo' />
          <button type='btn'>Add items</button>
          <button onClick={this.clearList} type='btn'>
            Clear list
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
