import { useEffect, useState } from 'react';
import instanceAxios from "../../utils/axios";
import avatarFemme from '../../../public/avatar-femme.webp';
import avatarHomme from '../../../public/avatar-homme.webp';
import type { User } from '../../@types/user';
import "./myProfil.scss"

function myProfile() {

  const [selectedAvatar, setSelectedAvatar] = useState(avatarFemme);
  const [user, setUser] = useState<User>()

  useEffect(()=> {
    instanceAxios.get('/api/profile').then(({data}) => {
      setUser(data)   
    })
  }, []);

  // Fonction pour gérer le changement d'avatar
  const handleAvatarChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAvatar(event.target.value);
  };

  return(
    <div className="myProfile">
      <div className="title-myProfile">
        <h3>Mes informations personnelles</h3>
      </div>

      <div className="informations-label">

        <div className='separation-label'>
          <div>
            <label htmlFor="firstname">Nom</label>
            <input type="text" id="firstname" placeholder="Nom*" defaultValue={user?.lastname}/>        
          </div>
          <div>
            <label htmlFor="lastname">Prénom</label>
            <input type="text" id="lastname" placeholder="Prénom*"defaultValue={user?.firstname}/>
          </div>
          <div>
            <label htmlFor="pseudo">Pseudo</label>
            <input type="text" id="pseudo" placeholder="Pseudo*"/>
          </div>
          <div>
            <label htmlFor="mail">Mail</label>
            <input type="text" id="mail" placeholder="Adresse email*"defaultValue={user?.email}/>
          </div>
          <div>
            <label htmlFor="address">Adresse</label>
            <input type="text" id="address" placeholder="Adresse*"/>
          </div>
          <div>
            <label htmlFor="postal_code">CP</label>
            <input type="text" id="postal_code" placeholder="Code postal*"/>
          </div>
          <div>
            <label htmlFor="country">Ville</label>
            <input type="text" id="country" placeholder="Ville*"/>
          </div>
        </div>
          
        <div className='avatar-profil'>
          <img className='avatar' src={selectedAvatar} alt="avatar" />
          <select className='select-profil' name="avatar" id="avatar" onChange={handleAvatarChange}>
          <option value="" disabled selected>Choisissez un avatar</option>
            <option value={avatarFemme}>Avatar femme</option>
            <option value={avatarHomme}>Avatar homme</option>
          </select>
        </div>

      </div>
      <div className="button-profile">
        <button className="button-style" type="button">Modifier mes informations</button>
      </div>
    </div>
  )
}

export default myProfile;