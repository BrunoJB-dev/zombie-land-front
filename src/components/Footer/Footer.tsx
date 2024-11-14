import { Link } from "react-router-dom";
import { HashLink} from "react-router-hash-link";
// npm install react-router-hash-link
// Si erreur Biome
// npm install --save-dev @types/react-router-hash-link
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
            <HashLink to="/informations#adress">Adresse: Hébécrevon (50180)</HashLink>
            <HashLink to="/informations#contact">Téléphone:  02-41-97-28-12 (numéro de téléphone fictif)</HashLink>
          </div>

          <div className ="Tips">
            <p>Informations</p>
            <HashLink to="/informations#mentions-legales">Mentions Légales</HashLink>
            <HashLink to="/informations#cgv">CGV / réservations</HashLink>
            <HashLink to="/informations#cgu">CGU</HashLink>
            <HashLink to="/informations#cookies">Politique vie privée et cookies</HashLink>
            <HashLink to="/informations#annulation">Annulation / remboursement</HashLink>
          </div>
        </div>
    </div>

)
}

export default Footer;
