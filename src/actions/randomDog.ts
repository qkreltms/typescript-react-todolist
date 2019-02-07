import * as types from "./types";

export const fetchDog = () => (dispatch: any) => {
  const url = "https://dog.ceo/api/breeds/image/random";

  return fetch(url)
    .then((res) => res.json())
    .then((data) => dispatch(fetchDogSuccessful(data)), (err) => dispatch(fetchDogFailed(err)));
};

export const requestDog = () => ({
  type: types.REQUEST_DOG,
});

interface IData {
    status: string;
    message: string;
}

export const fetchDogSuccessful = (data: IData) => ({
    payload: data.message,
    status: data.status,
    type: types.REQUEST_DOG_SUCCESSFUL,
});

export const fetchDogFailed = (err: Error) => ({
    payload: err.message,
    type: types.REQUEST_DOG_FAILED,
});
