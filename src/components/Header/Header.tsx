import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../AuthContext.tsx';
import { useEffect } from 'react';

import './Header.scss';

import SignUpForm from '../SignupForm/SignupForm.tsx';
import LoginForm from '../LoginForm/LoginForm.tsx';
import Modal from '../Modal/Modal.tsx';
import SearchBar from '../SearchBar/SearchBar.tsx';
import Burger from './Burger.tsx';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false); // État pour la visibilité de la SearchBar
  const { token, logout } = useAuth();

  // Fonction pour basculer la visibilité de la SearchBar
  const toggleSearchBar = () => {
    setIsSearchBarVisible((prev) => !prev);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isModalOpen]);

  return (
    <>
      {/* Conteneur principal du Header */}
      <div className="header">
        <Link className="logo" to="/">
          <img src="/logo-zombieland.webp" alt="logo zombieland" />
        </Link>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/attractions">Découvrez les attractions</Link>
          {token && <Link to="/profile">Mon compte</Link>}
        </nav>
        <div className="icons">
          {/* Icône de loupe avec toggle pour la SearchBar */}
          <i
            className="fa-solid fa-magnifying-glass fa-2xl"
            onClick={toggleSearchBar} // Gérer le clic pour afficher/masquer la SearchBar
            style={{ cursor: 'pointer' }}
          />
          <button
            type="button"
            className="user-button"
            onClick={() => setIsModalOpen(true)}
            aria-label='Se connecter ou créer un compte'
          >
            <i className="fa-solid fa-user fa-2xl" />
          </button>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <SignUpForm />
            <LoginForm onClose={() => setIsModalOpen(false)} />
          </Modal>
        </div>
        <Link className="booking" to="/reservation">
          Réserver
        </Link>

        <Burger />

        {/* Bouton de déconnexion qui s'affiche uniquement si l'utilisateur est connecté */}
        {token && (
          <button type="button" className="logout-button" onClick={logout}>
            Déconnexion
          </button>
        )}
      </div>

      {/* Afficher la SearchBar seulement si isSearchBarVisible est true */}
      {isSearchBarVisible && <SearchBar />}
    </>
  );
}

export default Header;
