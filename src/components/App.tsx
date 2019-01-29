import React, { Component } from 'react';
import Header from './Header'
import TodoList from './TodoList'
import { TodoModel } from '../models'

interface Props {

}

interface State {
  todos: TodoModel[]
}

class App extends Component<Props, State> {
  constructor(props: any) {
    super(props)
    
    this.state = {
      todos: [
        {id: 1, msg: 'todo1'},
        {id: 2, msg: 'todo2'}
      ]
    }
  }

  private deleteTodo = (id: number) => {
    const newTodo = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({todos: newTodo})
    console.log('deleteTodo')
  }
  
  private addTodo = (todo: TodoModel) => {
    const newTodo = [...this.state.todos, todo]

    this.setState({todos: newTodo})
    console.log('addTodo')
  }
  

  render() {
    return (
      <section className="App">
        <Header />
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} addTodo={this.addTodo}></TodoList>
      </section>
    );
  }
}

export default App;
