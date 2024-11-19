import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { addUser, editUser } from './services/api';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState('Add');
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAdd = () => {
    setFormMode('Add');
    setSelectedUser(null);
    setShowForm(true);
  };

  const handleEdit = (user) => {
    setFormMode('Edit');
    setSelectedUser(user);
    setShowForm(true);
  };

  const handleSubmit = async (data) => {
    try {
      if (formMode === 'Add') {
        await addUser(data);
      } else {
        await editUser(selectedUser.id, data);
      }
      setShowForm(false);
      window.location.reload();
    } catch {
      alert('Error submitting data');
    }
  };

  return (
    <div className="app">
      {showForm ? (
        <UserForm initialData={selectedUser} onSubmit={handleSubmit} onCancel={() => setShowForm(false)} />
      ) : (
        <UserList onEdit={handleEdit} onAdd={handleAdd} />
      )}
    </div>
  );
};

export default App