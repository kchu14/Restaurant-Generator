import React from "react";
import ListComponent from "./ListComponent"
import UserService from "../services/UserService";
import RestaurantListComponent from "./RestaurantListComponent"
import { Link } from 'react-router-dom';

export default class OtherAccountsProfileComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userToView: {
                name: '',
                email: '',
                likedRestaurants: []
            }
        };
    }

    componentWillMount() {
        debugger;
        const URL = window.location.href;
        const pid = (URL.split('/'))[4]
        const userToView = UserService.getUserById(pid);
        if (userToView !== undefined || userToView !== {}) {
            this.setState({
                userToView: userToView
            });
        };
    }

    render() {

        const { userToView } = this.state;

        if (userToView === undefined) return (
            <div className="profile-parent container">
                <div className="col-md-6 container-fluid mt-4">
                    <div className="card">
                        <h5 className="card-header">User profile does not exist :(</h5>
                        <div className="profile-parent container">
                        </div>
                    </div>
                </div>
            </div>
        );
        else return (
            <div className="col-md-6 container-fluid mt-4">
                <div className="card">
                    <h5 className="card-header">Profile</h5>
                    <div className="profile-parent container">
                        <div className="col-md-6 container-fluid mt-4">
                            <div className="card">
                                <h5 className="card-header">Profile</h5>
                                <div className="card-body">
                                    <div className="profile-data-container">
                                        {/* <p className="card-text">Name: {userToView.name}</p> */}
                                        <p className="card-text">Email: {userToView.email}</p>

                                        <h5 className="card-title">Saved Restaurants</h5>
                                        <div className="mt-2">
                                            {userToView.likedRestaurants.map((item, index) => (
                                                <ListComponent restaurant={item} key={index} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}