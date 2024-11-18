import './LoginForm.scss';

import { useState } from 'react';
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
  onClose: () => void;
}

const LoginForm = ({ onClose }: LoginFormProps) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState('fa-regular fa-eye-slash');

  const handleToggle = () => {
    if (type === 'password') {
      setIcon('fa-regular fa-eye');
      setType('text');
    } else {
      setIcon('fa-regular fa-eye-slash');
      setType('password');
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(email, password);
    setEmail('');
    setPassword('');
    onClose();
    navigate('/profile');
  };

  return (
    <section className="login-section">
      <h2>Se connecter</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className='email'>
          <label htmlFor="email" aria-label="email" />
          <input
            type="email"
            placeholder="Adresse mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="password-login-div">
          <label htmlFor="password" aria-label="password" />
          <input
            type={type}
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <i onClick={handleToggle} onKeyUp={handleToggle} className={icon} />
        </div>
        <p>Mot de passe oublié ?</p>
        <div>
          <button type="submit">Se connecter</button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
