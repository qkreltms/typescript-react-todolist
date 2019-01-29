import React from 'react';
import TodoItem from './TodoItem'
import { TodoModel } from '../models'
import AddTodo from './AddTodo'

interface Props {
    todos: TodoModel[]
    deleteTodo: (id: number) => void
    addTodo: (todo: TodoModel) => void 
}

const TodoList: React.SFC<Props> = (props) => {
    const todos = props.todos.length ? (
        props.todos.map(todo => {
            return <TodoItem todo={todo} key={todo.id} deleteTodo={props.deleteTodo} />
        })
    ) : (
        <pre>Noting to do.</pre>
    )

    return (
        <section>
            <ol>
                {todos}
            </ol>
            <AddTodo></AddTodo>
        </section>
    )
}

export default TodoList