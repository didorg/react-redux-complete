import React, { Component } from 'react';
import Todos from './Todos'
import AddTodoForm from './AddTodoForm'

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some fruit' },
      { id: 2, content: 'buy some fruit' }
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      // (key and value has the same name)
      // todos: todos
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
