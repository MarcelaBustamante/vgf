// src/Login.js
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // this is a fake validation just to test
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'user@example.com' && password === '123') {
      onLogin(true);
    } else {
      setError('Incorrect credentials');
    }
  };

  return (
    <div className="login-container">
      <h2 data-testid="login-title">Log in</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
           data-testid="email-input"
            id="email"
            name="email"
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            data-testid="password-input"
            id="password"
            name="password" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>
        {error && <p style={{color: 'red'}}>{error}</p>}
        <button type="submit" data-testid="submit-button">Save</button>
      </form>
    </div>
  );
};

export default Login;
