import * as types from "./types";

export const fetchDog = (url: string) => {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => fetchDogSuccessful(data), (err) => fetchDogFailed(err));
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
