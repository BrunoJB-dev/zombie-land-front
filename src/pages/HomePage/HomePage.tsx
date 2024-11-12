import { useEffect, useState } from 'react';
import instanceAxios from "../../utils/axios";
import { useNavigate } from 'react-router-dom';
import type { Attraction } from "../../@types/attraction";
import AttractionList from '../../components/AttractionList/AttractionList';
import Modal from '../../components/Modal/Modal';
import InfoCarPark from '../../components/InfoCarPark/InfoCarPark';
import InfoDisability from '../../components/InfoDisabilityAccess/InfoDisability';
import InfoSchedules from '../../components/InfoSchedules/InfoSchedules';
import InfoPlan from '../../components/InfoPlan/InfoPlan';
import "./HomePage.scss";
import SearchBar from '../../components/SearchBar/SearchBar';

function HomePage() {
  const [randomAttractions, setRandomAttractions] = useState<Attraction[]>([]);
  const [modalType, setModalType] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/attractions'); 
  };

  /*const iconContent = {
    horaires: 'Informations sur les horaires : Le parc est ouvert de 10h à 22h.',
    plan: 'Informations sur le plan du parc : Consultez notre plan interactif.',
    acces: 'Informations sur l\'accès au parc : Nous avons des parkings disponibles.',
    accessibilite: 'Informations sur l\'accessibilité : Le parc est accessible aux personnes à mobilité réduite.'
  };*/

  const handleIconClick = (type: string) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null); // Réinitialise le type pour éviter d'afficher le contenu précédent
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
      <SearchBar/>
      <h2 className="catch-phrase-homePage">Vos attractions favorites</h2>
      <AttractionList items={randomAttractions} />

      <button type='button' className='attractions-display-btn' onClick={handleNavigation}>
        Voir toutes les attractions
      </button>
      
      <section className='parc-presentation'>
        <h3>Le Parc d'Attractions Post-Apocalyptique le Plus Immersif au Monde !</h3>
        <img src="../../public/ZombieLand-HomePage-Banner.webp" alt="ZombieLand-Banner" />
        <p>
        Plongez dans un monde post-apocalyptique à ZombieLand, l'expérience immersive ultime où l'apocalypse des zombies prend vie. Ce parc d'attractions unique vous transporte dans un environnement dévasté, où chaque coin de rue est une nouvelle aventure terrifiante. Explorez 20 attractions palpitantes, allant des montagnes russes vertigineuses aux labyrinthes hantés, en passant par des expériences VR intenses et des maisons hantées effrayantes.
ZombieLand n'est pas pour les cœurs sensibles : des hordes de zombies animatroniques rôdent dans les zones dévastées, où les visiteurs doivent faire preuve de courage pour affronter des défis inattendus. Entre courses-poursuites avec les morts-vivants et manèges à sensations fortes, chaque visiteur est plongé dans un cauchemar vivant. Avec des décors post-apocalyptiques détaillés, des effets spéciaux à couper le souffle, et une ambiance angoissante, Zombie Land promet une montée d'adrénaline à chaque pas.
Que vous soyez un amateur de sensations fortes ou un passionné d'horreur, ZombieLand vous invite à survivre à cette expérience inoubliable. Entrez dans un monde où la terreur est reine... si vous l'osez.
        </p>
      </section>
      
      <section className='info-icones'>
        <span onClick={() => handleIconClick('horaires')} onKeyDown={() => handleIconClick('horaires')}>
          <i className="fa-solid fa-calendar-days fa-2xl"/>
          <p>Horaires</p>
        </span> 
        <span onClick={() => handleIconClick('plan')} onKeyDown={() => handleIconClick('plan')}> 
          <i className="fa-solid fa-map-location fa-2xl"/>
          <p>Plan du parc</p>
        </span>  
        <span onClick={() => handleIconClick('acces')} onKeyDown={() => handleIconClick('acces')}>
          <i className="fa-solid fa-car fa-2xl"/>
          <p>Se rendre au parc</p>
        </span>
        <span onClick={() => handleIconClick('accessibilite')} onKeyDown={() => handleIconClick('accessibilite')}>
          <i className="fa-brands fa-accessible-icon fa-2xl"/>
          <p>Accessibilité</p>
        </span>  
      </section>
      
      {/* Utilisation du composant Modal pour afficher le contenu spécifique */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalType === 'horaires' && <InfoSchedules />}
        {modalType === 'plan' && <InfoPlan />}
        {modalType === 'acces' && <InfoCarPark />}
        {modalType === 'accessibilite' && <InfoDisability />}
      </Modal>
    </>
  );
}

export default HomePage;
