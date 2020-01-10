import { connect } from 'react-redux';
import HeaderComponent from '../components/HeaderComponent';
import { logoutUser } from '../actions/UserActions';

const stateToPropertyMapper = state => {
    return {
        user: state.user,
        isUserLoggedIn: state.isUserLoggedIn
    };
};

const dispatchToPropertyMapper = dispatch => ({
        logoutUser: () => dispatch(logoutUser()),
        
});

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(HeaderComponent);