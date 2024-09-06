import './App.css';
import React, { useState } from 'react';
import './App.css';
import Login from './Login';

function App() {
  //get the status from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  // Handle login and saves status
  const handleLogin = (status) => {
    setIsAuthenticated(status);
    localStorage.setItem('isAuthenticated', status); // save in local storave
  };

  // Handle log out and clean storage
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); //delete storage
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <h1>Welcome to my little app</h1>
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <Login onLogin={() => handleLogin(true)} />
      )}
    </div>
  );
}

export default App;
