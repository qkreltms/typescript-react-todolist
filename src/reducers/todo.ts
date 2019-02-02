import * as types from "../actions/types";
import { ITodoModel } from "../models";

const createEmptyTodos = () => ({
    todos: [
        {id: 1, msg: "todo1"},
        {id: 2, msg: "todo2"}] as ITodoModel[],
});

const initialState = {
    todos: [
        {id: 1, msg: "todo1"},
        {id: 2, msg: "todo2"},
      ] as ITodoModel[],
};

export const todoReducer = (state = createEmptyTodos(), action: any) => {
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
