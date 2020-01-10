import React from 'react';
import YelpService from "../services/YelpService";
import UserService from "../services/UserService";
import LikedUsersComponent from "./LikedUsersComponent"

class DetailsComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            user: {},
            business: {},
            userLikes: []
        }
    }

    componentWillMount() {
        const URL = window.location.href;
        const rid = (URL.split('/'))[4]
        YelpService.getDetails(rid).then(business => {
            this.setState({
                business: business,
                businessId: rid
            });
        });

        this.setState({
            ...this.state,
            userLikes: UserService.getUsersForBusiness(this.state.businessId)
        });
        this.getUsersForBusiness();
    }

    getUsersForBusiness() {
        if (this.state.userLikes === undefined || this.state.userLikes === null) {
            this.setState({
                ...this.state,
                userLikes: UserService.getUsersForBusiness(this.state.businessId)
            }, () => this.state.userLikes);
        }
    }

    render() {
        if (this.state.business === {} || this.state.businessId === undefined) {
            return <div>Loading...</div>
        }
        let { userLikes } = this.state;
        if (!Array.isArray(userLikes)) {
            userLikes = [];
        }
        return (
            <div className="col-md-6 container-fluid mt-4">
                <div className="card">
                    <h5 className="card-header">{this.state.business.name}</h5>

                    <button className="btn btn-success btn-sm mt-3 mx-auto mb-4"> Add to liked restaurants </button>
                    <div className="card-body">

                        <div className="row container-fluid">

                            <img className="col-6"
                                src={this.state.business.image_url}
                                alt={this.state.business.name} />

                            <div className="col-6">
                                <p className="card-text"> Rating: {this.state.business.rating} </p>
                                <p className="card-text"> Price: {this.state.business.price}  </p>
                                <p className="card-text"> Phone number: {this.state.business.phone} </p>
                                <a className="card-text" href={this.state.business.url}> View {this.state.business.name} on Yelp  </a>
                            </div>
                        </div>

                        <h5 className="card-title mt-4">Users Who Like This Restaurant: </h5>
                        <div className="mt-2">
                            {userLikes.map((item, index) => (
                                <LikedUsersComponent
                                    user={item}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailsComponent;