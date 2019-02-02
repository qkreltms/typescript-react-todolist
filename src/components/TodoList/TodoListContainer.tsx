import { connect } from "react-redux";
import * as actions from "../../actions";
import { ITodoModel } from "../../models";
// import { IState } from "../../reducers";
import TodoList from "./TodoList";

const mapStateToProps = (state: any) => ({
  todos: state.todo.todos,
});

const mapDispatchToProps = (dispatch: any) => ({
  addTodo: (todo: ITodoModel) => dispatch(actions.addTodo(todo)),
  deleteTodo: (id: number) => dispatch(actions.deleteTodo(id)),
});

export const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
