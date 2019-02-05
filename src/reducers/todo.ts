import * as types from "../actions/types";
import { ITodoModel } from "../models";

// const createEmptyTodos = () => ({
//     todos: [
//         {id: 1, msg: "todo1"},
//         {id: 2, msg: "todo2"}] as ITodoModel[],
// });
export interface ITodosState {
    todos: ITodoModel[];
}

export const initialState: ITodoModel[] = [
    {id: 0, msg: ""},
];

export const todoReducer = (state = {todos: initialState}, action: any) => {
    switch (action.type) {
        case types.ADD_TODO: {
            const newTodo = [...state.todos, action.payload];
            return {todos: newTodo};
        }

        case types.DELETE_TODO: {
            const newTodo = state.todos.filter((todo) => {
                return todo.id !== action.payload;
            });
            return {todos: newTodo};
        }

        default: return state;
    }
};
