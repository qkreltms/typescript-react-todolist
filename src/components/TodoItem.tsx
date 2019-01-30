import React from "react";
import { ITodoModel } from "../models";

interface IProps {
    todo: ITodoModel;
    deleteTodo: (id: number) => void;
}

const TodoItem: React.SFC<IProps> = (props) => {
    return (
        <section>
            <li>{props.todo.msg}
                <button onClick={() => props.deleteTodo(props.todo.id)}>delete</button>
            </li>
        </section>
    );
};

export default TodoItem;
