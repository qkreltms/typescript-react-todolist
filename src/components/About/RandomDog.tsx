import React from "react";
import * as actions from "../../actions";

interface IProps {
  dispatch: (action: any) => void;
  errMessage: string;
  img: string;
  status: string;
}

export const RandomDog: React.SFC<IProps> = (props) => {
  const url = "https://dog.ceo/api/breeds/image/random";
  return (
    <section>
      <button onClick={() => props.dispatch(actions.fetchDog(url))}>click</button>
      {!props.img ? (
        <p>loading...</p>
      ) : props.errMessage ? (
        <p>{props.errMessage}</p>
      ) : (
        <p><img alt="img for dogs" src={props.img} /></p>
      )}
    </section>
  );
};
