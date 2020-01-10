import React from "react";
import { Link } from 'react-router-dom'

const LikedUsersComponent = ({user}) => (
    <div className="list-group-item">
        <Link to={'/profile/' + user.email}>{user.email}</Link>
    </div>
);

export default LikedUsersComponent;