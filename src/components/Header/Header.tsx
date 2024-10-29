import { Link } from "react-router-dom";

import "./Header.scss";

function Header() {
    return (
  <div className="header">
    <img src="../../public/logo-zombieland.png" alt="logo zombieland" />
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/">Découvrez les attractions</Link>
      <Link to="/">Billeterie</Link>
    </nav>
    <div>
      <i className="fa-solid fa-magnifying-glass fa-2xl"/>
      <i className="fa-solid fa-user fa-2xl"/>
    </div>
    <Link className="booking" to="/">Réserver</Link>
  </div>
)
}
export default Header;
