import React from "react";
import { Redirect } from "react-router";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      user: {
        email: "",
        password: ""
      },
      submitted: false,
      isUserLoggedIn: JSON.parse(localStorage.getItem("isUserLoggedIn")),
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
    event.preventDefault();
    this.setState({ submitted: true });
    const { user } = this.state;
    // TODO: check htmlFor good user data here? Maybe in UserService or backend instead
    // TODO: validate data in general
    this.props.loginUser(user);
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
                <h5 className="card-title text-center">Sign In</h5>
                <Form onSubmit={this.handleSubmit}>
                  <div>
                    <label htmlFor="wbdv-inputUsername">Username</label>
                    <input
                      type=""
                      value={user.userName}
                      name="userName"
                      onChange={this.handleChange}
                      id="wbdv-inputUsername"
                      className="form-control"
                      placeholder="Username"
                      required
                      autoFocus
                    />
                  </div>
                  <div className="form-label-group mt-4">
                    <label htmlFor="wbdv-inputPassword">Password</label>
                    <input
                      type="password"
                      value={user.password}
                      name="password"
                      onChange={this.handleChange}
                      id="wbdv-inputPassword"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <button
                    className="btn btn-lg btn-success btn-block mt-4"
                    type="submit"
                  >
                    Sign in
                  </button>
                  <Link to="/register">
                    <button
                      className="btn btn-lg btn-primary btn-block mt-4"
                      value="submit"
                      type="submit"
                    >
                      Register
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
