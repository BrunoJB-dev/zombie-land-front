import './LoginForm.scss';

import { useState } from 'react';
import { useAuth } from '../../AuthContext';


const LoginForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(email, password);
    
  };

  return (
    <section className="login-section">
      <h1>Se connecter</h1>
       <form onSubmit={handleSubmit} className='login-form'>
        <div>
          <label htmlFor="email" aria-label="email"/>
          <input type="email" placeholder="Adresse mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="password" aria-label="password"/>
          <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <p>Mot de passe oublié ?</p>
        <div><button type="submit" >Se connecter</button></div>
      </form>
    </section>
  );
};

export default LoginForm;