import { Link } from "react-router-dom";

import "./Footer.scss"

function Footer() {
  
  return (
    <div>
      <div className="zombies-footer"/>
        <div className="footer">
          <div className="Visit">
             <p>Le parc</p>
             <Link to="/">Découvrez le parc</Link>
             <Link to="/">Préparez votre visite</Link>
             <Link to="/reservation">Billeterie</Link>
          </div>
          
          <div className ="Help">
            <p>Aide</p>
            <Link to="/">Foire aux questions</Link>
            <Link to="/">Adresse</Link>
            <Link to="/">Téléphone</Link>
          </div>

          <div className ="Tips">
            <p>Informations</p>
            <Link to="/">Mentions Légales</Link>
            <Link to="/">CGV / réservations</Link>
            <Link to="/">CGU</Link>
            <Link to="/">Politique vie privée et cookies</Link>
            <Link to="/">Annulation / remboursement</Link>
          </div>
        </div>
    </div>

)
}

export default Footer;
