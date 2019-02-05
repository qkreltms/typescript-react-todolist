import { combineReducers } from "redux";
import { ILocaleState, localeReducer } from "./locale";
import { ITodosState, todoReducer } from "./todo";

export interface IState {
    locale: ILocaleState;
    todo: ITodosState;
}

export const rootReducer = combineReducers<IState>({
    locale: localeReducer,
    todo: todoReducer,
});
