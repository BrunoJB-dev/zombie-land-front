import { Link } from "react-router-dom";
import { useState } from 'react';
import { useAuth } from "../../AuthContext.tsx";

import "./Header.scss";
import SignUpForm from "../SignupForm/SignupForm.tsx";
import LoginForm from "../LoginForm/LoginForm.tsx";
import Modal from "../Modal/Modal.tsx";


function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { token, logout } = useAuth(); // Récupération du token et de la fonction logout

  return (
    <div className="header">
      <Link className="logo" to='/'><img src="../../public/logo-zombieland.png" alt="logo zombieland" /></Link>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/attractions">Découvrez les attractions</Link>
        {token && <Link to="/profile">Mon compte</Link>}
      </nav>
      <div className="icons">
        <i className="fa-solid fa-magnifying-glass fa-2xl" />
        <button type="button" className="user-button" onClick={() => setIsModalOpen(true)}>
          <i className="fa-solid fa-user fa-2xl" />
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <SignUpForm />
          <LoginForm onClose={() => setIsModalOpen(false)}/>
        </Modal>
      </div>
      <Link className="booking" to="/reservation">Réserver</Link>

      {/* Bouton de déconnexion qui s'affiche uniquement si l'utilisateur est connecté */}
      {token && (
        <button type="button" className="logout-button" onClick={logout}>
          Déconnexion
        </button>
      )}
    </div>
  );
}

export default Header;