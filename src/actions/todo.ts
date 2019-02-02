import { ITodoModel } from "../models";
import * as types from "./types";

export const addTodo = (Todo: ITodoModel) => {
    return (
        {
            payload: Todo,
            type: types.ADD_TODO,
        }
    );
};

export const deleteTodo = (id: number) => {
    return (
        {
            payload: id,
            type: types.DELETE_TODO,
        }
    );
};
