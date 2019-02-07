import React from "react";

interface IProps {
  fetchDog: () => void;
  errMessage: string;
  img: string;
  status: string;
}

export const RandomDog: React.SFC<IProps> = (props) => {
    return (
    <section>
      <button onClick={() => props.fetchDog()}>click</button>
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
