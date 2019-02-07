import { combineReducers } from "redux";
import { ILocaleState, localeReducer } from "./locale";
import { IRandomDogState, randomDogReducer } from "./randomDog";
import { ITodosState, todoReducer } from "./todo";

export interface IState {
    locale: ILocaleState;
    todo: ITodosState;
    randomDog: IRandomDogState;
}

export const rootReducer = combineReducers<IState>({
    locale: localeReducer,
    randomDog: randomDogReducer,
    todo: todoReducer,
});
