import React, { Component } from "react";
import { ITodoModel } from "../../models";
import TodoList from "./TodoList";

interface IState {
  todos: ITodoModel[];
}

export class TodoListContainer extends Component<{}, IState> {
  constructor(Iprops: {}) {
    super(Iprops);

    this.state = {
      todos: [
        {id: 1, msg: "todo1"},
        {id: 2, msg: "todo2"},
      ],
    };
  }

  public render() {
    return (
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} addTodo={this.addTodo}></TodoList>
    );
  }

  private deleteTodo = (id: number) => {
    const newTodo = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({todos: newTodo});
  }

  private addTodo = (todo: ITodoModel) => {
    const newTodo = [...this.state.todos, todo];
    this.setState({todos: newTodo});
  }
}

export default TodoListContainer;
