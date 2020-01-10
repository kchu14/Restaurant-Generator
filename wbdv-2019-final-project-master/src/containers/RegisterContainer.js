import { connect } from "react-redux";
import { registerUser } from "../actions/UserActions";
import RegisterComponent from "../components/RegisterComponent";

const stateToPropertyMapper = state => {
  return {
    user: state.user,
    submitted: state.submitted,
    isUserLoggedIn: state.isUserLoggedIn,
    loginError: state.loginError
  };
};

const dispatchToPropertyMapper = dispatch => ({
  registerUser: user => dispatch(registerUser(user))
});

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(RegisterComponent);
