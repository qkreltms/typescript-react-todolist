import React from "react";
import { FormattedMessage } from "react-intl";
import { withColor } from "../../hoc";
import { RandomDogContainer } from "./RandomDogContainer";

interface IProps {
  color: string;
}

export const About: React.SFC<IProps> = (props) => {
  const style = {
    color: props.color,
  };

  return (
    <section style={style}>
      <FormattedMessage id="about" />
      <RandomDogContainer />
    </section>
  );
};

export default withColor(About);
