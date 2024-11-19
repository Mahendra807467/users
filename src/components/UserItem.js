import React from 'react';
import "../styles/UserItem.css";

const UserItem = ({ user, onEdit, onDelete }) => (
  <div className="user-item">
    <p>ID: {user.id}</p>
    <p>Name: {user.name}</p>
    <p>Email: {user.email}</p>
    <p>Department: {user.company?.name || 'N/A'}</p>
    <button onClick={() => onEdit(user)}>Edit</button>
    <button onClick={() => onDelete(user.id)}>Delete</button>
  </div>
);

export default UserItem;