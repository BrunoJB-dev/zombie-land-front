import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

import "./Header.scss";
import SignUpForm from "../SignupForm/SignupForm.tsx";

function Header() {
  const [modalContent, setModalContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleIconClick = () => {
    SignUpForm;
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
    return (
  <>
  <div className="header">
    <Link className="logo" to ='/'><img src="../../public/logo-zombieland.png" alt="logo zombieland" /></Link>
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/attractions">Découvrez les attractions</Link>
      <Link to="/">Billeterie</Link>
    </nav>
    <div>
      <i className="fa-solid fa-magnifying-glass fa-2xl"/>
      <span onClick={() => handleIconClick(SignUpForm())}><i className="fa-solid fa-user fa-2xl"/></span>
    </div>
    <Link className="booking" to="/">Réserver</Link>
  </div>

  {isModalOpen && (
    <div>
      <div>
        <span className="close" onClick={closeModal}>&times;</span>
        <p>{modalContent}</p>
      </div>
    </div>
  )}
  </>
  );
}
export default Header;
