import { combineReducers } from "redux";
import { ITodoModel } from "../models";
import { localeReducer } from "./locale";
import { todoReducer } from "./todo";

// export interface IState {
//     locale: any;
//     todo: ITodoModel;
// }

export const rootReducer = combineReducers<any>({
    locale: localeReducer,
    todo: todoReducer,
} as any);
