import React from "react";

interface IProps {
  fetchDog: () => void;
  errMessage: string;
  img: string;
  status: string;
  loading: boolean;
}

export const RandomDog: React.SFC<IProps> = (props) => {
    return (
    <section>
      <button onClick={() => props.fetchDog()}>click</button>
      {props.loading ? (
        <p>loading...</p>
      ) : props.errMessage ? (
        <p>{props.errMessage}</p>
      ) : (
        <p><img src={props.img} /></p>
      )}
    </section>
  );
};
