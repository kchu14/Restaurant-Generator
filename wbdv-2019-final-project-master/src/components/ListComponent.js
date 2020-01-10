import React from "react";
import { Link } from "react-router-dom";

const SavedRestaurants = ({ restaurant }) => (
  <div className="list-group-item">
    {restaurant.name}
    <button className="btn btn-danger btn-sm float-right"> x </button>
  </div>
);

export default SavedRestaurants;
