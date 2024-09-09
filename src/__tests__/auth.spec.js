import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import UserPanel from '../components/UserPanel';
import { UserProvider } from '../UserContext';
  
const mockedUsedNavigate = jest.fn();

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
  }));

  // Unit test for logout function
  describe('Logout', () => {
    beforeEach(() => {
      // fake storage
      localStorage.setItem('user', JSON.stringify({ email: 'user@example.com' }));
    });
  
    it('When user do log out then the storage should be clean', () => {
      // render user panel component
      const {getByText} = render(
        <UserProvider><UserPanel/></UserProvider>
      )
      // find log out button by text
      const button = getByText("Cerrar Sesión");
      fireEvent.click(button);
      // assert local storage is empty
      expect(localStorage.getItem('user')).toBeNull();
    });
  });
