import React from "react";
import { ITodoModel } from "../../models";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

interface IProps {
    todos: ITodoModel[];
    deleteTodo: (id: number) => void;
    addTodo: (todo: ITodoModel) => void;
}

export const TodoList: React.SFC<IProps> = (props) => {
    const todos = props.todos && props.todos.length ? (
        props.todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.id} deleteTodo={props.deleteTodo} />;
        })
    ) : (
        <pre>...</pre>
    );

    return (
        <section>
            <ol>
                {todos}
            </ol>
            <AddTodo addTodo={props.addTodo}></AddTodo>
        </section>
    );
};

export default TodoList;
