import type React from 'react';
import {useState} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';
import instanceAxios from '../../utils/axios';

import "./ResetPassword.scss";
import { isAxiosError } from 'axios';

export const ResetPassword: React.FC = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    //* Variables qui gèrent le changement d'icône et type du champ de mot de passe
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState('fa-regular fa-eye-slash');
    const handleToggle = () => {
      if (type === 'password') {
        setIcon('fa-regular fa-eye');
        setType('text');
      } else {
        setIcon('fa-regular fa-eye-slash');
        setType('password');
      }
    };

    //* Récupération du token généré en back dans l'url (coucou les QueryStrings)
    const token = searchParams.get('signature');

    //* A la soumission du formulaire ...
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        //* Comparaison du mot de passe et de sa confirmation
        if(newPassword !== confirmPassword){
            setError('Les mots de passe ne sont pas similaire');
            return;
        }

        try {
            //* Envoi des infos au back
            const response = await instanceAxios.post('/api/resetPassword', {
                token,
                newPassword
            });

            if(response.status === 200) {
                setIsSuccess(true);
                setTimeout(() => navigate('/'), 3000)
            }
        } catch (err) {
            if(isAxiosError(err)){
                setError(err.response?.data?.message || 'Une erreur s\'est produite');
            }
        }
    }

    return (
        <main>
            <div className='reset-password-container'>
                {isSuccess ? (
                        <div className='success-message'>
                            <p>Changement de mot de passe réalisé avec succès, Redirection vers la page d'accueil. </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} >
                            <h2>Reinitialiser votre mot de passe</h2>
                            {error && <p>{error}</p>}
                            <div className='form-group'>
                                <label htmlFor='newPassword'>Nouveau mot de passe : </label>
                                <input type={type} id="newpassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                                <i onClick={handleToggle} onKeyUp={handleToggle} className={icon} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='confirmPassword'>Confirmer le nouveau mot de passe : </label>
                                <input type={type} id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                                <i onClick={handleToggle} onKeyUp={handleToggle} className={icon} />
                            </div>
                            <button className="reset-button" type="submit">Changer le mot de passe</button>
                        </form>
                    )
                }
            </div>
        </main>
    )
}