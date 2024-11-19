import React, { useState } from 'react';
import "../styles/UserForm.css";

const UserForm = ({ onSubmit, initialData = {}, onCancel }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input name="name" placeholder="Name" value={formData.name || ''} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={formData.email || ''} onChange={handleChange} required />
      <input name="department" placeholder="Department" value={formData.department || ''} onChange={handleChange} />
      <button type="submit">Submit</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default UserForm;