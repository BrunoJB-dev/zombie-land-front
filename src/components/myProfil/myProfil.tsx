import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../AuthContext.tsx";
import instanceAxios from '../../utils/axios';
import avatarFemme from '../../../public/avatar-femme.webp';
import avatarHomme from '../../../public/avatar-homme.webp';
import type { User } from '../../@types/user';
import './myProfil.scss';

function myProfile() {
  const [selectedAvatar, setSelectedAvatar] = useState(avatarFemme);
  const [user, setUser] = useState<User>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const { logout } = useAuth();

  useEffect(() => {
    instanceAxios.get('/api/profile').then(({ data }) => {
      setUser(data);
    });
  }, []);
  const [placeholder, setPlaceholder] = useState(true);
  // Fonction pour gérer le changement d'avatar
  const handleAvatarChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAvatar(event.target.value);
    setPlaceholder(false);
  };

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    instanceAxios.delete('/api/profile/del').then(() => {});
    setIsModalOpen(false);
    navigate('/')
    logout();
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
              defaultValue={user?.lastname}
            />
          </div>
          <div>
            <label htmlFor="lastname">Prénom</label>
            <input
              type="text"
              id="lastname"
              placeholder="Prénom*"
              defaultValue={user?.firstname}
            />
          </div>
          <div>
            <label htmlFor="pseudo">Pseudo</label>
            <input type="text" id="pseudo" placeholder="Pseudo*" />
          </div>
          <div>
            <label htmlFor="mail">Mail</label>
            <input
              type="text"
              id="mail"
              placeholder="Adresse email*"
              defaultValue={user?.email}
            />
          </div>
          <div>
            <label htmlFor="address">Adresse</label>
            <input type="text" id="address" placeholder="Adresse*" />
          </div>
          <div>
            <label htmlFor="postal_code">CP</label>
            <input type="text" id="postal_code" placeholder="Code postal*" />
          </div>
          <div>
            <label htmlFor="country">Ville</label>
            <input type="text" id="country" placeholder="Ville*" />
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
        <button className="button-style" type="button">
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
        <div className="modal">
          <h4>Confirmer la suppression</h4>
          <p>
            Êtes-vous sûr de vouloir supprimer votre profil ? Cette action est
            irréversible.
          </p>
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
      )}
    </div>
  );
}

export default myProfile;
