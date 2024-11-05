import { Link } from "react-router-dom";

import "./Header.scss";

function Header() {
    return (
  <div className="header">
    <Link className="logo" to ='/'><img src="../../public/logo-zombieland.png" alt="logo zombieland" /></Link>
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/attractions">Découvrez les attractions</Link>
      <Link to="/">Billeterie</Link>
    </nav>
    <div>
      <i className="fa-solid fa-magnifying-glass fa-2xl"/>
      <Link to="/login">
      <i className="fa-solid fa-user fa-2xl"/>
      </Link>
    </div>
    <Link className="booking" to="/">Réserver</Link>
  </div>
)
}
export default Header;
