import { useEffect, useState } from 'react';
import instanceAxios from "../../utils/axios";
import avatarFemme from '../../../public/avatar-femme.webp';
import avatarHomme from '../../../public/avatar-homme.webp';
import type { User } from '../../@types/user';
import "./myProfil.scss"

function myProfile() {

  const [selectedAvatar, setSelectedAvatar] = useState(avatarFemme);
  const [userId, setUserId] = useState<User>()
  
  useEffect(()=> {
    instanceAxios.get('/api/profile').then(({data}) => {
      setUserId(data)   
    })
  }, []);

  
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
            <input type="text" id="firstname" placeholder="Nom*" defaultValue={userId?.lastname} />        
          </div>
          <div>
            <label htmlFor="lastname">Prénom</label>
            <input type="text" id="lastname" placeholder="Prénom*"defaultValue={userId?.firstname} />
          </div>
          <div>
            <label htmlFor="pseudo">Pseudo</label>
            <input type="text" id="pseudo" placeholder="Pseudo*"defaultValue={userId?.pseudo} />
          </div>
          <div>
            <label htmlFor="mail">Mail</label>
            <input type="text" id="mail" placeholder="Adresse email*"defaultValue={userId?.email} />
          </div>
          <div>
            <label htmlFor="address">Adresse</label>
            <input type="text" id="address" placeholder="Adresse*"defaultValue={userId?.adress} />
          </div>
          <div>
            <label htmlFor="postal_code">CP</label>
            <input type="text" id="postal_code" placeholder="Code postal*"defaultValue={userId?.postal_code} />
          </div>
          <div>
            <label htmlFor="country">Ville</label>
            <input type="text" id="country" placeholder="Ville*"defaultValue={userId?.country} />
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
        <button className="button-style" type="button" >Modifier mes informations</button>
      </div>
    </div>
  )
}

export default myProfile;

