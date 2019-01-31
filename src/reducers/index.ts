import { combineReducers } from "redux";
import { locale as localeReducer } from "./locale";

export interface IState {
    locale: any;
}

export const rootReducer = combineReducers<IState>({
    locale: localeReducer,
} as any);
