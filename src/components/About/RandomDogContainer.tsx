import { connect } from "react-redux";
import { IState } from "../../reducers";
import { RandomDog } from "./RandomDog";

const mapStateToProps = (state: IState) => ({
    errMessage: state.randomDog.errMessage,
    img: state.randomDog.img,
    status: state.randomDog.status,
  });

export const RandomDogContainer = connect(mapStateToProps)(RandomDog);
