import { connect } from 'react-redux';
import OtherAccountsProfileComponent from '../components/OtherAccountsProfileComponent';

const stateToPropertyMapper = state => {
    return {
        userToView: state.userToView
    };
};

const dispatchToPropertyMapper = dispatch => {
    return {
    };
};

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(OtherAccountsProfileComponent);