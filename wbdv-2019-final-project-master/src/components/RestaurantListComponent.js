import React from "react";

const OwnedRestaurants = ({restaurant}) => (
    <div className="list-group-item">
        {restaurant}
        <button className="btn btn-danger btn-sm float-right ml-2"> x </button>
        <button className="btn btn-success btn-sm float-right"> save </button>
        <button className="btn btn-primary btn-sm float-right mr-2"> edit </button>

    </div>
);

export default OwnedRestaurants;