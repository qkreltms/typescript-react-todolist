import { applyMiddleware, compose, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { IState, rootReducer } from "./reducers";

export const store: Store<IState> = createStore(rootReducer, compose(applyMiddleware(thunk)));
