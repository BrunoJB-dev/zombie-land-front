import { useEffect, useState } from 'react';
import type { Attraction } from "../../@types/attraction";
import AttractionList from '../../components/AttractionList/AttractionList';
import { instanceAxios } from "../../utils/axios";
import "./HomePage.scss";

function HomePage() {
  const [randomAttractions, setRandomAttractions] = useState<Attraction[]>([]);
  const [modalContent, setModalContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Définir le contenu pour chaque icône
  const iconContent = {
    horaires: 'Informations sur les horaires : Le parc est ouvert de 10h à 22h.',
    plan: 'Informations sur le plan du parc : Consultez notre plan interactif.',
    acces: 'Informations sur l\'accès au parc : Nous avons des parkings disponibles.',
    accessibilite: 'Informations sur l\'accessibilité : Le parc est accessible aux personnes à mobilité réduite.'
  };

  const handleIconClick = (key) => {
    setModalContent(iconContent[key]); // Récupérer le contenu correspondant à la clé
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    instanceAxios.get('/api/attractions/random').then(({ data }) => {
      setRandomAttractions(data);
    });
  }, []);

  return (
    <>
      <div className="banner-homePage">
        <h1>Bienvenue à ZombieLand</h1>
      </div>
      <h2 className="catch-phrase-homePage">Vos attractions favorites</h2>
      <AttractionList items={randomAttractions} />
      
      <section className='parc-presentation'>
        <h3>Titre de présentation du parc</h3>
        <img src="../../public/ZombieLand-HomePage-Banner.webp" alt="ZombieLand-Banner" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias aperiam optio expedita, ea velit fugit excepturi ipsam, saepe delectus nostrum numquam explicabo aliquam fugiat consequuntur consequatur atque! Omnis, velit obcaecati?
        </p>
      </section>
      
      <section className='info-icones'>
        <span onClick={() => handleIconClick('horaires')}>
          <i className="fa-solid fa-calendar-days"/>
          <p>Horaires</p>
        </span> 
        <span onClick={() => handleIconClick('plan')}> 
          <i className="fa-solid fa-map-location"/>
          <p>Plan du parc</p>
        </span>  
        <span onClick={() => handleIconClick('acces')}>
          <i className="fa-solid fa-car"/>
          <p>Se rendre au parc</p>
        </span>
        <span onClick={() => handleIconClick('accessibilite')}>
          <i className="fa-brands fa-accessible-icon"/>
          <p>Accessibilité</p>
        </span>  
      </section>
      
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
