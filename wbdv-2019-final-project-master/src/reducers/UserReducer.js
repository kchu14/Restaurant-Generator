const initialState = {
    user: {},
    submitted: false,
    isUserLoggedIn: false,
    loginError: null,
    userToView: {}
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                submitted: true,
                user: action.user
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isUserLoggedIn: true,
                user: action.user
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                isUserLoggedIn: false,
                user: {},
                loginError: action.error
            };
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                isUserLoggedIn: false,
                user: {}
            };
        case 'GET_USER_READONLY_FAILURE':
            return {
                ...state,
                userToView: undefined
            };
        case 'GET_USER_READONLY_SUCCESS':
            return {
                ...state,
                userToView: action.userToView
            };
        default:
            return state;
    }
};

export default UserReducer;
