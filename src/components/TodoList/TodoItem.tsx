import React from "react";
import { FormattedMessage } from "react-intl";
import { ITodoModel } from "../../models";

interface IProps {
    todo: ITodoModel;
    deleteTodo: (id: number) => void;
}

const TodoItem: React.SFC<IProps> = (props) => {
    return (
        <section>
            <li>{props.todo.msg}
                <button onClick={() => props.deleteTodo(props.todo.id)}>
                    <FormattedMessage id="delete" />
                </button>
            </li>
        </section>
    );
};

export default TodoItem;
