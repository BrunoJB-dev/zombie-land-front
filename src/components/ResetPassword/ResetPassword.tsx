import type React from 'react';
import {useState} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';
import instanceAxios from '../../utils/axios';


export const ResetPassword: React.FC = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

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
        } catch (error) {
            setError(error.response?.data?.message || 'Une erreur s\'est produite');
        }
    }

    return (
        <div className='reset-password-container'>
            {isSuccess ? (
                    <div className='success-message'>
                        <p> Changement de mot de passe réalisé avec succès, Redirection vers la page d'accueil. </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} >
                        <h2>Reinitialiser votre mot de passe : </h2>
                        {error && <p>{error}</p>}
                        <div className='form-group'>
                            <label htmlFor='newPassword'>Nouveau mot de passe : </label>
                            <input type="password" id="newpassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='confirmPassword'>Nouveau mot de passe : </label>
                            <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        </div>
                        <button type="submit">Changer le mot de passe</button>
                    </form>
                )
            }
        </div>
    )
}