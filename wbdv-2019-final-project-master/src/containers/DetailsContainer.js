import { connect } from "react-redux";
import DetailsComponent from "../components/DetailsComponent";
import { getUsersForBusiness } from '../actions/UserActions';

// TODO: might not need this file

const stateToPropertyMapper = state => {
    return {
        business: state.business
    };
};

const dispatcherToPropertyMapper = dispatch => ({
        getUsersForBusiness: businessId => dispatch(getUsersForBusiness(businessId))
});

const DetailsContainer = connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
)(DetailsComponent);

export default DetailsContainer;