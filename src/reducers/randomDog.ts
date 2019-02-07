import * as types from "../actions/types";

export interface IRandomDogState {
  errMessage: string;
  img: string;
  loading: boolean;
  status: string;
}

export const initialState = {
  errMessage: "",
  img: "",
  loading: false,
  status: "failed",
};

export const randomDogReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.REQUEST_DOG:
      return {
        loading: true,
        ...state,
      };
    case types.REQUEST_DOG_SUCCESSFUL:
      return {
        ...state,
        img: action.payload,
        status: action.status,
      };
    case types.REQUEST_DOG_FAILED:
      return {
        ...state,
        errMessage: action.payload,
      };
    default:
      return state;
  }
};
