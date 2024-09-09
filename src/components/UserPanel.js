import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';

const UserPanel = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div id="user-panel">
      <h2>Panel de Usuario</h2>
      <p>Email: {user.email}</p>
      <button onClick={() => alert('Funcionalidad pendiente...')}>Editar Perfil</button>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default UserPanel;
