import { connect } from 'react-redux';
import { loginUser } from '../actions/UserActions';
import LoginComponent from '../components/LoginComponent';

const stateToPropertyMapper = state => {
    return {
        user: state.user,
        submitted: state.submitted,
        isUserLoggedIn: state.isUserLoggedIn,
        loginError: state.loginError
    };
};

const dispatchToPropertyMapper = dispatch => ({
    loginUser: user => dispatch(loginUser(user))
});

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(LoginComponent);