import { createContext, useState, useContext, type ReactNode } from 'react';
import instanceAxios from './utils/axios';
import { useEffect } from 'react';

type AuthContextType = {

  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps{
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {

  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));

  const login = async (email: string, password: string): Promise<void> => {

    try {
    
      const response = await instanceAxios.post('/api/login', { email, password });     
      setUser(response.data.user);
      localStorage.setItem('user', JSON.stringify(response.data.user));     
      setToken(`Bearer ${response.data.accessToken}`);
      localStorage.setItem('token', response.data.accessToken); // Stocke le token dans le localStorage
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if(savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []); 

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token'); // Supprime le token du localStorage
    localStorage.removeItem('user'); // Supprime le user du localStorage
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

