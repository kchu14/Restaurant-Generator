import React from "react";
import ListComponent from "./ListComponent";
import RestaurantListComponent from "./RestaurantListComponent";
import { logoutUser } from "../actions/UserActions";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

export default class Profile extends React.Component {
  // DESIGN: a user object has a likedRestaurants list, and an admin object w/ value=if they are an admin,
  // and other values (restaurantList) if they are an admin.

  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem("user")),
      isUserLoggedIn: JSON.parse(localStorage.getItem("isUserLoggedIn")),
      // use this to change profile data
      isInEditMode: false
    };
    // debugger;

    this.setEditMode = this.setEditMode.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  setEditMode() {
    this.setState({ ...this.state, isInEditMode: !this.state.isInEditMode });
  }

  handleLogout(event) {
    this.props.logoutUser();
    // localStorage.setItem('isUserLoggedIn', 'false');
    // this.setState({
    //     user: {},
    //     isUserLoggedIn: false
    // }).then(this.render);
  }

  handleChange(event) {
    event.preventDefault();

    const { name, value } = event.target;
    const { user } = this.state;

    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  render() {
    const { user, isUserLoggedIn, isInEditMode } = this.state;
    //;debugger
    // TODO: finish render user profile info
    // TODO: let user edit info

    if (!isUserLoggedIn) {
      return (
        <div className="profile-parent container">
          <div className="col-md-6 container-fluid mt-4">
            <div className="card">
              <h5 className="card-header">Profile</h5>
              <div className="card-body">
                <Link to="/login">
                  <button className="btn btn-primary btn-block mt-4">
                    Login to see your profile!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (user !== undefined) {
      return (
        <div className="profile-parent container">
          {isUserLoggedIn && (
            // TODO: edit constraints for which users can see what user information
            // TODO: set page url to contain ID of user, can be used to restrict data
            <div className="col-md-6 container-fluid mt-4">
              <div className="card">
                <h5 className="card-header">Profile</h5>
                <div className="card-body">
                  {!isInEditMode && (
                    <div className="profile-data-container">
                      <p className="card-text">Name: {user.name}</p>
                      {/* <p className="card-text">Last Name: {user.lname}</p> */}
                      <p className="card-text">Username: {user.userName}</p>
                      <p className="card-text">Email: {user.email}</p>

                      <button
                        className="btn btn-primary btn-block mt-4"
                        onClick={this.setEditMode}
                        type="submit"
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-success btn-block mt-4 mb-4"
                        onClick={this.props.saveUserProfileData}
                        type="submit"
                      >
                        Save
                      </button>

                      <h5 className="card-title">Saved Restaurants</h5>
                      <div className="mt-2">
                        {user.likedRestaurants &&
                          user.likedRestaurants.map((item, index) => (
                            <ListComponent restaurant={item} key={index} />
                          ))}
                      </div>
                    </div>
                  )}
                  {isInEditMode && (
                    <div className="profile-data-container">
                      <Form onSubmit={this.handleSubmit}>
                        <div className="form-label-group mt-4">
                          <label htmlFor="wbdv-inputFName">First Name</label>
                          {console.log(user)}
                          <input
                            value={user.name}
                            onChange={this.handleChange}
                            id="wbdv-inputFName"
                            className="form-control"
                            name="name"
                            required
                          />
                        </div>
                        {/* <div className="form-label-group mt-4">
                          <label htmlFor="wbdv-inputLName">Last Name</label>
                          <input
                            value={user.lname}
                            onChange={this.handleChange}
                            id="wbdv-inputLName"
                            className="form-control"
                            name="lname"
                            required
                          />
                        </div> */}
                        <div className="form-label-group mt-4">
                          <label htmlFor="wbdv-inputUsername">Username</label>
                          <input
                            value={user.userName}
                            onChange={this.handleChange}
                            id="wbdv-inputUsername"
                            className="form-control"
                            name="userName"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="wbdv-inputEmail">Email address</label>
                          <input
                            type="email"
                            value={user.email}
                            name="email"
                            onChange={this.handleChange}
                            id="wbdv-inputEmail"
                            className="form-control"
                            placeholder="Email address"
                            name="email"
                            required
                            autoFocus
                          />
                        </div>
                      </Form>

                      <button
                        className="btn btn-primary btn-block mt-4"
                        onClick={this.setEditMode}
                        type="submit"
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-success btn-block mt-4 mb-4"
                        onClick={() => {
                          this.setEditMode();
                          this.props.saveUserProfileData(user);
                        }}
                        type="submit"
                      >
                        Save
                      </button>

                      {/* TODO  */}
                      {/* <h5 className="card-title">Saved Restaurants</h5>
                                            <div className="mt-2">
                                                {user.likedRestaurants.map((item, index) => (
                                                    <ListComponent restaurant={item} key={index} />
                                                ))}
                                            </div> */}
                    </div>
                  )}
                  {/* Logout Button */}
                  <Link to="/">
                    <button
                      href="/"
                      className="btn btn-primary btn-block mt-4 mb-4"
                      onClick={this.handleLogout}
                    >
                      Logout
                    </button>
                  </Link>
                </div>
                {/* render if user is admin */}
                {user.idAdmin && (
                  <div className="admin-profile-panel">
                    <h5 className="card-header">Restaurant Owner</h5>
                    <div className="card-body">
                      <div className="row">
                        <input
                          className="form-control wbdv-addRestaurant col-md-6 ml-3"
                          id="addRestaurant"
                          placeholder="Enter New Restaurant"
                        ></input>
                        <button
                          className="btn btn-success col-md-3 ml-1 mb-3"
                          type="submit"
                        >
                          Add Restaurant
                        </button>
                      </div>
                      <h5 className="card-title">Restaurants You Own</h5>
                      <div className="mt-2">
                        {user.admin.adminRestaurants.map((item, index) => (
                          <RestaurantListComponent
                            restaurant={item}
                            key={index}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      );
    } else return <div></div>;
  }
}
