import { connect } from "react-redux";
import * as actions from "../../actions";
import { IState } from "../../reducers";
import { RandomDog } from "./RandomDog";

const mapStateToProps = (state: IState) => ({
    errMessage: state.randomDog.errMessage,
    img: state.randomDog.img,
    loading: state.randomDog.loading,
    status: state.randomDog.status,
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchDog: () => dispatch(actions.fetchDog()),
});

export const RandomDogContainer = connect(mapStateToProps, mapDispatchToProps)(RandomDog);
