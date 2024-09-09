import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import UserPanel from './components/UserPanel';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <h1>Proyecto Web Básico</h1>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/user-panel" element={
              <PrivateRoute>
                <UserPanel />
              </PrivateRoute>
            } />
            <Route path="/" element={<LoginForm />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
