// pages/LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Import your CSS file

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      // Handle successful login, e.g., redirect or store auth token
      console.log(response.data);
    } catch (error) {
      setError('Invalid username or password. Please try again.'); // Handle login error
      console.error(error);
    }
  };

  return (
    <div className="container">
      <form className="form-container" onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
