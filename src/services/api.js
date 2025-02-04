const BASE_URL = 'https://jsonplaceholder.typicode.com';


export const fetchUsers = async () => {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
  };
  
  export const addUser = async (user) => {
    const response = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    if (!response.ok) throw new Error('Failed to add user');
    return response.json();
  };
  
  export const editUser = async (id, user) => {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    if (!response.ok) throw new Error('Failed to edit user');
    return response.json();
  };
  
  export const deleteUser = async (id) => {
    const response = await fetch(`${BASE_URL}/users/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Failed to delete user');
    return response;
  };