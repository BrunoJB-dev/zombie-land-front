import { createContext, useState, useContext, type ReactNode } from 'react';
import { instanceAxios } from './utils/axios';
import { useEffect } from 'react';


type AuthContextType = {
  /* login : () => void;
  logout : () => void; */

  // Modif içi
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps{
  children: ReactNode;
}

// Modif içi
interface User {
  id: string;
  name: string;
  email: string;
  password: string
  // ajoute d'autres propriétés ici si nécessaire
}


export const AuthProvider = ({ children }: AuthProviderProps) => {
  //const [user, setUser] = useState(null);
  //const [token, setToken] = useState(() => localStorage.getItem('token'));

  // Modif içi
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));


  //const login = async (email, password) => {
  const login = async (email: string, password: string): Promise<void> => {

    try {
      console.log("Login data:", {email, password});  // ?? Est-ce normal qu'on voit le mdp en console.log ?

      const response = await instanceAxios.post('/api/login', { email, password });
      console.log("User data from API:", response.data.user);

      console.log("data", response.data);
      setUser(response.data.user);
      console.log(user);
      
      setToken(`Bearer ${response.data.accessToken}`);
      localStorage.setItem('token', response.data.accessToken); // Stocke le token dans le localStorage
    } catch (error) {
      console.error('Login error:', error);
    }
  };

 // Modif içi
/*  useEffect(() => {
  console.log("Updated user:", user);
}, [user]); */

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token'); // Supprime le token du localStorage
    localStorage.removeItem('user'); // Supprime user de localStorage
  };

   // Modif içi
    useEffect(() => {
      const savedUser = localStorage.getItem('user');
      const savedToken = localStorage.getItem('token');
      if (savedUser) setUser(JSON.parse(savedUser));
      if (savedToken) setToken(savedToken);
    }, []);

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Modif içi
/* export const useAuth = () => {
  return useContext(AuthContext);
}; */

// Modif içi
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

/*import { createContext, useContext, useState } from 'react';

interface User {
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};*/
