import React, { useEffect, useState } from 'react';
import { fetchUsers, deleteUser } from '../services/api';
import UserItem from './UserItem';
import "../styles/UserList.css";

const UserList = ({ onEdit, onAdd }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError('Error fetching users');
      }
    };
    getUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch {
      setError('Error deleting user');
    }
  };

  return (
    <div className="user-list">
      {error && <div className="error">{error}</div>}
      <button onClick={onAdd}>Add User</button>
      {users.map((user) => (
        <UserItem key={user.id} user={user} onEdit={onEdit} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default UserList;