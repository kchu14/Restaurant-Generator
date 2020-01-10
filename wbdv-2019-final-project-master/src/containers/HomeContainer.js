import { connect } from 'react-redux';
import HomeComponent from '../components/HomeComponent';

const stateToPropertyMapper = state => {
    return {
        user: state.user,
        isUserLoggedIn: state.isUserLoggedIn
    };
};

export default connect(stateToPropertyMapper)(HomeComponent);