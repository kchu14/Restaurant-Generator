import React from "react";
import { Link } from 'react-router-dom';

var Restaurant = {
    name: "Pho Basil",
    id: "PSp0P_3zWIQabA5HAIJBMQ",
    href: "http://www.phobasil.com/img/home1.jpg",
    price: "$$",
    rating: "4.3/5",
    address: "177 Massachusetts Ave, Boston, MA 02115"
}

// TODO: adapt content for logged in/anonymous user (home page and profile page min.)

export default class HomeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            isUserLoggedIn: false
        };
    }

    render() {

        const isUserLoggedIn = JSON.parse(localStorage.getItem('isUserLoggedIn'));
        const user = JSON.parse(localStorage.getItem('user'));

        return (
            <div className="container-fluid col-10 mt-4">
                <div className="card mb-3">
                    <h1 className="card-header text-center">Northeastern Restaurant Generator</h1>
                    <div className="card-body">
                        <h4 className="card-text text-center">Randomly generate a restaurant near Northeastern based on the criteria below</h4>
                        <h5 className="card-text mt-4 text-center">Choose the criteria that is most important to you</h5>

                        <div className="mt-3">
                            <div className="text-center justify-end">
                                <div className="form-check ">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="1" defaultChecked />
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        Close to Northeastern
                              </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input float-left" type="radio" name="exampleRadios" id="exampleRadios2" value="2" />
                                    <label className="form-check-label" htmlFor="exampleRadios2">
                                        Low price
                              </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input float-left" type="radio" name="exampleRadios" id="exampleRadios3" value="3" />
                                    <label className="form-check-label" htmlFor="exampleRadios3">
                                        High Rating
                              </label>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="mt-5"> Click here to generate a random restaurant! </h3>
                            <button className="btn btn-success btn-lg mt-1"> Generate </button>
                        </div>
                    </div>

                    {!isUserLoggedIn &&
                        <div>
                            <Link to="/login">
                                <button className="btn btn-lg btn-primary btn-block mt-4" value="submit"
                                    type="submit">Login to see your restaurants!</button>
                            </Link>
                        </div>
                    }
                    {isUserLoggedIn &&
                        <div>
                            {/* TODO: customized user restaurant data */}
                            <Link to={`/details/${Restaurant.id}`}>
                                <div className="container-fluid card mt-4 col-md-11 col-11 mb-5">
                                    <h3 className="alert alert-success mt-2 text-center" role="alert"> Restaurant last saved by {user.email}</h3>
                                    <div className="row container-fluid">

                                        <div className="col-md-6">
                                            <h1 className="mt-3 font-weight-bold text-left text-dark"> {Restaurant.name} </h1>
                                            <h6 className="text-left text-dark"> Price: {Restaurant.price} </h6>
                                            <h6 className="text-left text-dark"> Rating: {Restaurant.rating} </h6>
                                            <h6 className="mb-5 text-left text-dark"> Address: {Restaurant.address} </h6>
                                        </div>
                                        <div className="col">
                                            <img className="mt-3 mb-3" src={Restaurant.href} width="100%" height="auto" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        );
    }
}