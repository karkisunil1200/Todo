import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: true
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: data
    };
  }

  addItems = item => {
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };

    this.setState({
      data: [...this.state.data, newItem]
    });
  };

  clearList = () => {
    this.setState({
      data: []
    });
  };

  render() {
    return (
      <div>
        <TodoList data={this.state.data} />
        <TodoForm addItems={this.addItems} clear={this.clearList} />
      </div>
    );
  }
}

export default App;
