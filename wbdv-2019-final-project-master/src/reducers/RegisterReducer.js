
const initialState = {
    user: {},
    submitted: false,
    isUserLoggedIn: false,
    loginError: null
};

const RegisterReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'REGISTER_REQUEST':
            return {
                ...state,
                submitted: true,
                user: action.user
            };
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                isUserLoggedIn: true,
                user: action.user
            };
        case 'REGISTER_FAILURE':
            return {
                ...state,
                isUserLoggedIn: false,
                loginError: action.error
            };
        default:
            return state;
    }
};

export default RegisterReducer;