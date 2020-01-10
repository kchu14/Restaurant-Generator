import { connect } from 'react-redux';
import ProfileComponent from '../components/ProfileComponent';
import { logoutUser, setUserData } from '../actions/UserActions';

const stateToPropertyMapper = state => {
    return {
        user: state.user,
        submitted: state.submitted,
        isUserLoggedIn: state.isUserLoggedIn,
        loginError: state.loginError
    };
};

const dispatchToPropertyMapper = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser()),
        saveUserProfileData: user => dispatch(setUserData(user))
    };
};

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(ProfileComponent);