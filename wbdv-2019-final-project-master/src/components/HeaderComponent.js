import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';
import history from '../history';

export default class HeaderComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: JSON.stringify(localStorage.getItem('isUserLoggedIn')),
      user: JSON.stringify(localStorage.getItem('user'))
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event) {
    localStorage.setItem('isUserLoggedIn', JSON.stringify(false));
    localStorage.setItem('user', JSON.stringify({}));
    this.setState({
      isUserLoggedIn: false,
      user: {}
    });
    history.push('/');
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      isUserLoggedIn: JSON.stringify(localStorage.getItem('isUserLoggedIn')),
      user: JSON.stringify(localStorage.getItem('user'))
    });
  }

  render() {

    const isUserLoggedIn = JSON.parse(localStorage.getItem('isUserLoggedIn'));

    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="container-fluid">
        <Navbar.Brand as={Link} className="navbar-brand ml-5 mr-5" to="/">
          Restaurant Generator
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {!isUserLoggedIn &&
              <div>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              </div>
            }
            {!isUserLoggedIn &&
              <div>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </div>
            }
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/search">Search</Nav.Link>
            <Nav.Link as={Link} to="/privacy">Privacy Policy</Nav.Link>
            {isUserLoggedIn &&
              <div>
                <Nav.Link as={Link} to="/" onClick={this.handleLogout}>Logout</Nav.Link>
              </div>
            }
          </Nav>
          <span className="navbar-text text-dark">Built with the Yelp API</span>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}