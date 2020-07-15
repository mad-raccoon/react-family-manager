import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import { userApi } from '../apis';

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);

  const login = async (email, password) => {
    const loginData = await userApi.login(email, password);
    dispatch({ type: 'LOGIN', payload: loginData });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return { user: state, login, logout };
};
