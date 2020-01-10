import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

export default class RegisterComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      user: JSON.parse(localStorage.getItem("user")),
      isUserLoggedIn: JSON.parse(localStorage.getItem("isUserLoggedIn")),
      submitted: false,
      loginError: null
    };
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

  handleSubmit(event) {
    this.setState({ submitted: true });
    const { user } = this.state;
    // TODO: check htmlFor good user data here? Maybe in UserService or backend
    this.props.registerUser(user);
  }

  render() {
    const { user, isUserLoggedIn } = this.state;
    return (
      <div className="container">
        {isUserLoggedIn && <Redirect to="/profile" />}
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card mt-4">
              <div className="card-body">
                <h5 className="card-title text-center">Register</h5>
                <Form onSubmit={this.handleSubmit}>
                  <div>
                    <label htmlFor="wbdv-inputFName">Name</label>
                    <input
                      type="text"
                      value={user.name}
                      onChange={this.handleChange}
                      name="name" //name="fname"
                      id="wbdv-inputFName"
                      className="form-control"
                      placeholder="First Name"
                      required
                      autoFocus
                    />
                  </div>
                  {/* TODO only name in backend no first and last} */}
                  {/* <div className="mt-4">
                    <label htmlFor="wbdv-inputLName">Last Name</label>
                    <input
                      type="text"
                      value={user.lname}
                      onChange={this.handleChange}
                      name="lname"
                      id="wbdv-inputLName"
                      className="form-control"
                      placeholder="Last Name"
                      required
                      autoFocus
                    />
                  </div> */}
                  <div className="mt-4">
                    <label htmlFor="wbdv-inputUsername">Username</label>
                    <input
                      type="text"
                      value={user.userName}
                      onChange={this.handleChange}
                      name="userName"
                      id="wbdv-inputUsername"
                      className="form-control"
                      placeholder="Username"
                      required
                      autoFocus
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="wbdv-inputEmail">Email address</label>
                    <input
                      type="email"
                      value={user.email}
                      onChange={this.handleChange}
                      name="email"
                      id="wbdv-inputEmail"
                      className="form-control"
                      placeholder="Email address"
                      required
                      autoFocus
                    />
                  </div>
                  <div className="form-label-group mt-4">
                    <label htmlFor="wbdv-inputPassword">Password</label>
                    <input
                      type="password"
                      value={user.password}
                      onChange={this.handleChange}
                      name="password"
                      id="wbdv-inputPassword"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="form-label-group mt-4">
                    <label htmlFor="wbdv-verifyPassword">Verify Password</label>
                    <input
                      type="password"
                      value={user.verifyPassword}
                      onChange={this.handleChange}
                      name="verifyPassword"
                      id="wbdv-verifyPassword"
                      className="form-control"
                      placeholder="Verify Password"
                      required
                    />
                  </div>
                  <input
                    className="mb-3 mt-4"
                    type="checkbox"
                    value={user.isAdmin}
                    onChange={this.handleChange}
                    name="isAdmin"
                  />{" "}
                  Restaurant Owner
                  <br />
                  <Link to="/login">
                    <button
                      className="btn btn-lg btn-success btn-block mt-4"
                      value="submit"
                      type="submit"
                      onClick={() => this.props.registerUser(user)}
                    >
                      Register
                    </button>
                  </Link>
                  <Link to="/login">
                    <button
                      className="btn btn-lg btn-primary btn-block mt-4"
                      type="submit"
                    >
                      Login
                    </button>
                  </Link>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
