import { useState } from 'react';
import './SignupForm.scss';
import { signingUp } from '../../SignupContext';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function SignUpForm() {
  //* Variables pour gérer le formulaire d'inscription
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');

  //* Variables qui gèrent le changement d'icône et type du champ de mot de passe
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

  //* Variable qui gère l'envoi des données au back pour enregistrer un nouvel utilisateur
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //* On vérifie que les deux mots de passe coïncident, si oui, on envoie

    if (password !== confirmedPassword) {
      return console.log('Vos mots de passes ne sont pas identiques');
    }
    await signingUp(firstname, lastname, email, password, confirmedPassword);
    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
    setConfirmedPassword('');
    toast.success(
      'Votre compte a bien été crée. Vous pouvez maintenant vous connecter.',
      {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
      },
    );
  };

  return (
    <section className="SignUpSection">
      <h2>Créer votre compte</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="email">
          <label htmlFor="email" aria-label="email" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Adresse mail *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="password">
          <div className="password-div">
            <label htmlFor="password" aria-label="password" />
            <input
              type={type}
              name="password"
              id="password"
              placeholder="Mot de passe *"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i onClick={handleToggle} onKeyUp={handleToggle} className={icon} />
          </div>
          <div className="passwordConfirmation-div">
            <label htmlFor="passwordConfirmation" aria-label="password" />
            <input
              type={type}
              name="passwordConfirmation"
              id="passwordConfirmation"
              placeholder="Confirmation *"
              value={confirmedPassword}
              onChange={(e) => setConfirmedPassword(e.target.value)}
              required
            />
            <i onClick={handleToggle} onKeyUp={handleToggle} className={icon} />
          </div>
        </div>
        <div className="identity">
          <div className="lastname-div">
            <label htmlFor="lastname" aria-label="lastname" />
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Nom *"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <div className="firstname-div">
            <label htmlFor="firstname" aria-label="firstname" />
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Prénom *"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <button type="submit" value="S'inscrire">
            S'inscrire
          </button>
        </div>
      </form>
    </section>
  );
}

export default SignUpForm;
