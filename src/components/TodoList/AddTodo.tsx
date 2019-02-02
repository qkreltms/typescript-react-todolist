import React from "react";
import { FormattedMessage } from "react-intl";
import { ITodoModel } from "../../models";

interface IProps {
    addTodo: (todo: ITodoModel) => void;
}

interface IState {
    msg: string;
}

class AddTodo extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            msg: "",
        };
    }

    public render() {
        return (
            <section>
                <form onSubmit={this.handleOnsubmit}>
                    <input type="text" onChange={this.setMsg} value={this.state.msg}></input>
                    <button type="submit">
                        <FormattedMessage id="add" />
                    </button>
                </form>
            </section>
        );
    }

    private handleOnsubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTodo = {id: Math.random(), msg: this.state.msg} as ITodoModel;
        this.props.addTodo(newTodo);
        this.setState({msg: ""});
    }

    private setMsg = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({msg: e.target.value});
    }
}

export default AddTodo;
