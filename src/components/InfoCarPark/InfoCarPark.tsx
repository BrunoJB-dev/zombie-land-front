import '../../styles/infoModal.scss';
import LeafletMap from "../../components/Leaflet/LeafletMap";
import './InfoCarPark.scss';

function InfoCarPark() {
  return (
    
    <div className= "modal-car-park">
      <h3 className="modal-title">Où nous trouver ?</h3>
      <div className='map-modal'>
        <LeafletMap/>
      </div>
      <h3 className="modal-title">Où vous garer ?</h3>
      <p className="modal-text">
      Profitez de notre parking sécurisé et facilement accessible pour passer une journée sans souci ! Que vous veniez en voiture, en moto ou en camping-car, notre parking spacieux se trouve à quelques pas de l'entrée du parc. Tarif unique pour la journée et gratuit pour les détenteurs du Pass annuel. Des places pour les personnes à mobilité réduite sont également disponibles.
      </p>
    </div>
  )
}

export default InfoCarPark;