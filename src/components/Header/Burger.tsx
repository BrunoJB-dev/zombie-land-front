import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../AuthContext.tsx';

import './Burger.scss';

import SignUpForm from '../SignupForm/SignupForm.tsx';
import LoginForm from '../LoginForm/LoginForm.tsx';
import Modal from '../Modal/Modal.tsx';
import SearchBar from '../SearchBar/SearchBar.tsx';

function Burger() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false); // État pour la visibilité de la SearchBar
  const { token, logout } = useAuth();

  // Fonction pour basculer la visibilité de la SearchBar
  const toggleSearchBar = () => {
    console.log('je dois faire quelque chose ici')
    setIsSearchBarVisible((prev) => !prev);
  };

  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  useEffect(() => {
    if (burgerOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
      setIsSearchBarVisible(false)
    }});

  return (
    <div>
      <div className="burger-container" onClick={toggleBurger}>
        <div className="burger burger1"> </div>
        <div className="burger burger2"> </div>
        <div className="burger burger3"> </div>
      </div>
      {burgerOpen && (
        <div className="nav-burger">
          <nav className="nav-burger-links">
            <Link className="nav-burger-link" to="/">
              Accueil
            </Link>
            <Link className="nav-burger-link" to="/attractions">
              Découvrez les attractions
            </Link>
            {token && (
              <Link className="nav-burger-link" to="/profile">
                Mon compte
              </Link>
            )}
          </nav>
          <div className="icons-burger">
            {/* Icône de loupe avec toggle pour la SearchBar */}
            <i
              className="fa-solid fa-magnifying-glass fa-2xl icons-burger-header"
              onClick={toggleSearchBar} // Gérer le clic pour afficher/masquer la SearchBar
              style={{ cursor: 'pointer' }}
            />
            <button
              type="button"
              className="user-button"
              onClick={() => setIsModalOpen(true)}
            >
              <i className="fa-solid fa-user fa-2xl icons-burger-header" />
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <SignUpForm />
              <LoginForm onClose={() => setIsModalOpen(false)} />
            </Modal>
          </div>
          
          {token && (
          <button type="button" className="logout-button logout-button-burger" onClick={logout}>
            Déconnexion
          </button>
        )}
        <Link className="booking booking-burger" to="/reservation">
            Réserver
          </Link>
        </div>
      )}
      {isSearchBarVisible && <SearchBar />}
    </div>
  );
}

export default Burger;
