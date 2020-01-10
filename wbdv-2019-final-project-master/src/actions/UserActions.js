import UserService from "../services/UserService";
import history from "../history";

export function registerUser(user) {
  return dispatch => {
    dispatch(registerRequest(user));
    const registerResult = UserService.registerUser(user);
    if (registerResult === undefined) {
      dispatch(registerFailure(registerResult));
    } else {
      dispatch(registerRequest(registerResult));
      history.push("/");
    }
    console.log("registered", user);
  };
}

export function loginUser(user) {
  return dispatch => {
    dispatch(loginRequest(user));
    UserService.loginUser(user).then(loginResult => {
      debugger;
      if (loginResult === undefined) {
        dispatch(loginFailure(loginResult));
      } else {
        dispatch(loginSuccess(loginResult));
        history.push("/");
      }
    });
  };
}

export function setUserData(user) {
  return dispatch => {
    UserService.setUserData(user).then(
      user => {
        dispatch(updateUserDataSuccess(user));
      }, error => {
        dispatch(updateUserDataFailure(error));
      });
  };
}

export function logoutUser() {
  UserService.logoutUser();
  return logoutSuccess();
}

export function getUsersForBusiness(businessId) {
  return dispatch => {
    const userLikes = UserService.getUserLikesForBusiness(businessId);
    // will never return null/undef, only empty []
    dispatch(getUserLikesForBusinessSuccess(userLikes));
  };
}

export function getUserReadOnly(userId) {
  return dispatch => {
    const getUserReadOnlyResult = UserService.getUserReadOnly(userId);
    if (getUserReadOnlyResult === undefined) {
      dispatch(getUserReadOnlyFailure());
    } else dispatch(getUserReadOnlySuccess(getUserReadOnlyResult));
  };
}
function getUserLikesForBusinessSuccess(userLikes) {
  return { type: "GET_USER_LIKES_FOR_BUSINESS", userLikes: userLikes };
}
function getUserReadOnlyFailure() {
  return { type: "GET_USER_READONLY_FAILURE" };
}
function getUserReadOnlySuccess(userToView) {
  return { type: "GET_USER_READONLY_SUCCESS", userToView: userToView };
}
function updateUserDataSuccess(user) {
  return { type: "UPDATE_USER_DATA_SUCCESS", user };
}
function updateUserDataFailure(error) {
  return { type: "UPDATE_USER_DATA_FAILURE", error };
}
function logoutSuccess() {
  return { type: "LOGOUT_SUCCESS" };
}
function loginRequest(user) {
  return { type: "LOGIN_REQUEST", user };
}
function loginSuccess(user) {
  return { type: "LOGIN_SUCCESS", user };
}
function loginFailure(error) {
  return { type: "LOGIN_FAILURE", error };
}

function registerRequest(user) {
  return { type: "REGISTER_REQUEST", user };
}
function registerSuccess(user) {
  return { type: "REGISTER_SUCCESS", user };
}
function registerFailure(error) {
  return { type: "REGISTER_FAILURE", error };
}