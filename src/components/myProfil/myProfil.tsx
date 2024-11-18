import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../AuthContext.tsx";
import instanceAxios from '../../utils/axios';
import avatarFemme from '/avatar-femme.webp';
import avatarHomme from '/avatar-homme.webp';
import type { User } from '../../@types/user';
import Modal from '../../components/Modal/Modal';

import './myProfil.scss';
import "../../components/Modal/Modal.scss"


function myProfile() {
  
  const [selectedAvatar, setSelectedAvatar] = useState(avatarFemme);
  const [user, setUser] = useState<User>();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [adress, setAdress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');

  const { logout } = useAuth();

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false); // Réinitialise le type pour éviter d'afficher le contenu précédent
  };


  useEffect(() => {
    instanceAxios.get('/api/profile').then(({ data }) => {
      setUser(data);
      setFirstname(data.firstname);
      setLastname(data.lastname);
      setPseudo(data.pseudo);
      setEmail(data.email);
      setAdress(data.adress);
      setPostalCode(data.postal_code);
      setCity(data.city);
    });
  }, []);

  const [placeholder, setPlaceholder] = useState(true);
  
  const handleAvatarChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAvatar(event.target.value);
    setPlaceholder(false);
  };

    const handleUpdate = async () => {
      
      setSuccessMessage(null);
      try {
        await instanceAxios.patch('/api/profile/update', {
          firstname,
          lastname,
          pseudo,
          email,
          adress,
          postal_code: postalCode,
          city
        });
        setSuccessMessage('Vous avez mis à jour vortre profil avec succès !');
      } catch (error) {
        console.error("Erreur lors de la mise à jour du profil :", error);
        alert("Échec de la mise à jour");
      }
    };


    const [successMessage, setSuccessMessage] = useState<string | null>(null);


  const handleDelete = () => {
    setIsModalOpen(true);
  };
  

  const confirmDelete = () => {
     instanceAxios.delete('/api/profile/delete').then(() => {
       setIsModalOpen(false);
       navigate('/');
      });
      setTimeout(logout, 50);
  };
   
  const cancelDelete = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="myProfile">
      <div className="title-myProfile">
        <h3>Mes informations personnelles</h3>
      </div>

      <div className="informations-label">
        <div className="separation-label">
          <div>
            <label htmlFor="firstname">Nom</label>
            <input
              type="text"
              id="firstname"
              placeholder="Nom*"
              defaultValue={user?.firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastname">Prénom</label>
            <input
              type="text"
              id="lastname"
              placeholder="Prénom*"
              defaultValue={user?.lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="pseudo">Pseudo</label>
            <input type="text" id="pseudo" placeholder="Pseudo*" 
            defaultValue={user?.pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="mail">Mail</label>
            <input
              type="text"
              id="mail"
              placeholder="Adresse email*"
              defaultValue={user?.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="adress">Adresse</label>
            <input type="text" id="adress" placeholder="Adresse*" 
            defaultValue={user?.adress}
            onChange={(e) => setAdress(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="postal_code">CP</label>
            <input type="text" id="postal_code" placeholder="Code postal*" 
            defaultValue={user?.postal_code}
            onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="country">Ville</label>
            <input type="text" id="country" placeholder="Ville*" 
            defaultValue={user?.city}
            onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <div className="avatar-profil">
          <img className="avatar" src={selectedAvatar} alt="avatar" />
          <select
            className="select-profil"
            name="avatar"
            id="avatar"
            onChange={handleAvatarChange}
          >
            {placeholder && <option value="">Faire mon choix </option>}{' '}
            <option value={avatarFemme}>Avatar femme</option>
            <option value={avatarHomme}>Avatar homme</option>
          </select>
        </div>
      </div>
      <div className="button-profile">

        <div>
          {successMessage && (
                  <p className="success-message">{successMessage}</p>
                )}
        </div>
        
        <button className="button-style" type="button" onClick={handleUpdate}>
          Modifier mes informations
        </button>
      </div>

      <div className="button-profile-delete">
        <button
          className="button-style-delete"
          type="button"
          onClick={handleDelete}
        >
          Supprimer mon profil
        </button>
      </div>
      {isModalOpen && (
         <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="modal-myprofile">
          <h4>Confirmer la suppression</h4>
          <p>
            Êtes-vous sûr de vouloir supprimer votre profil ? Cette action est
            irréversible.
          </p>
          <div className='button-myprofile'>
            <button
              type="button"
              className="button-confirm"
              onClick={confirmDelete}
            >
              Confirmer
            </button>
            <button
              type="button"
              className="button-cancel"
              onClick={cancelDelete}
            >
              Annuler
            </button>
          </div>
        </div>
        </Modal>
      )}
    </div>
  );
}

export default myProfile;
