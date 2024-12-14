/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './UserCard.css';

const UserCard = ({ user }) => {
    return (
        <div className="user-card">
            <h2>{user.name || 'No Name Provided'}</h2>
            <p><strong>Email:</strong> {user.email || 'No Email Provided'}</p>
            <p><strong>Phone:</strong> {user.phone || 'No Phone Provided'}</p>
            <p><strong>Website:</strong> {user.website || 'No Website Provided'}</p>
            <p><strong>Company:</strong> {user.company?.name || 'No Company Provided'}</p>
            <p><strong>Address:</strong> {user.address ? `${user.address.street}, ${user.address.city}` : 'No Address Provided'}</p>
        </div>
    );
};

export default UserCard;
