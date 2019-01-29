import React from 'react';
import { TodoModel } from '../models'

interface Props {
    todo: TodoModel
    deleteTodo: (id: number) => void
}

const TodoItem: React.SFC<Props> = (props) => {
    return (
        <section>
            <button onClick={() => props.deleteTodo}>delete</button><li>{props.todo.msg}</li>
        </section>
    )
}

export default TodoItem