import fetch from "cross-fetch";
import * as constants from "../util/constants";

export default class UserService {
  static headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true
  };

  // TODO: finish user register api calls
  static registerUser(user) {
    debugger;
    try {
      return fetch(constants.API_BASEURL + "/users", {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(user)
      }).then(r => r.json());
    } catch (error) {
      return error;
    }
  }

  // TODO: finish login backend calls
  static loginUser(user) {
    debugger;
    try {
      return fetch(constants.API_BASEURL + "/login", {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(user)
      })
        .then(r => r.json())
        .then(validated_user => {
          localStorage.setItem("user", JSON.stringify(validated_user));
          localStorage.setItem("isUserLoggedIn", JSON.stringify(true));
          return JSON.stringify(validated_user);
        });
    } catch (error) {
      return undefined;
    }
  }

  static logoutUser() {
    try {
      localStorage.setItem("user", JSON.stringify({}));
      return fetch();
    } catch (error) {
      return error;
    }
  }

  // TODO: user can update their personal data from the profile page
  static setUserData(user) {
    try {
      localStorage.setItem("user", JSON.stringify(user));
      return fetch(constants.API_BASEURL + "/users/" + user.id, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: this.headers
      }).then(r => r.json());
    } catch (error) {
      return error;
    }
  }

    static getUserById(email) {
        try {
            // api call
            return fetch(constants.API_BASEURL + '/users', {
                method: 'GET',
                body: JSON.stringify(email),
                headers: this.headers
            }).then(r => {
                return r.ok ? r.json() : {}
            });
        } catch (error) {
            return error;
        }
    }

    static getUsersForBusiness(businessId) {
        try {
            return fetch(constants.API_BASEURL + businessId + '/likes', {
                method: 'GET',
                body: JSON.stringify(businessId),
                headers: this.headers
            }).then(r => {
                return r.ok ? r.json() : []
            });
        } catch (error) {
            return [];
        }
    }
}
