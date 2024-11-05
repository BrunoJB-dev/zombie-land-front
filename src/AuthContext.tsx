import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { instanceAxios } from './utils/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await instanceAxios.post('/api/login', { email, password });
      setUser(response.data.user);
      setToken(response.data.accessToken);
      localStorage.setItem('token', response.data.accessToken); // Stocke le token dans le localStorage
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token'); // Supprime le token du localStorage
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
