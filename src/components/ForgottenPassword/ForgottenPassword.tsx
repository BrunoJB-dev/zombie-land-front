import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instanceAxios from "../../utils/axios";

import "./ForgottenPassword.scss";

interface ForgottenPasswordProps {
  onClose : () => void;
}

export const ForgottenPassword: React.FC = ({onClose} : ForgottenPasswordProps) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await instanceAxios.post('/api/lostpassword', {email});
      
      if(response.status === 200) {
        setIsSuccess(true);
        setTimeout(() => navigate('/'), 3000)
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Une erreur s\'est produite');
    }

    onClose=() => setIsModalOpen(false);
  }

  return (
    <main>
      <div className='lost-password-container'>
        {isSuccess ? (
          <div className='success-message'>
            <p>Votre adresse mail a été bien confirmée. Un email de renouvellement vous a été envoyée à l'adresse indiquée.</p>
          </div>
          ) : (
          <form className="forgotten-mail" onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <h2>Veuillez saisir l'adresse mail du compte</h2>
            <div className='form-group'>
              <label htmlFor='email'>Votre adresse mail : </label>
              <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <button className="mail-button" type="submit">Envoyer</button>
          </form>
          )
        }
      </div>
    </main>
  )
}