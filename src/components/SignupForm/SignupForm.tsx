import { useState } from 'react';
import './SignupForm.scss';
import { signingUp } from '../../SignupContext';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signingUp(firstname, lastname, email, password);
  };

  return (
    <section className="SignUpSection">
      <h1>Créer votre compte</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" aria-label="email"/>
          <input type="email" name="email" id="email" placeholder="Adresse mail *" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className='password'>
          <div>
            <label htmlFor="password" aria-label="password"/>
            <input type="password" name="password" id="password" placeholder="Mot de passe *" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <div>
            <label htmlFor="passwordConfirmation" aria-label="password"/>
            <input type="password" name="passwordConfirmation" id="passwordConfirmation" placeholder="Confirmation *" required/>
          </div>
        </div>
        <div className='identity'>
          <div>
            <label htmlFor="lastname" aria-label="lastname"/>
            <input type="text" name="lastname" id="lastname" placeholder="Nom *" value={lastname} onChange={(e) => setLastname(e.target.value)} required/>
          </div>
          <div>
            <label htmlFor="firstname" aria-label="firstname"/>
            <input type="text" name="firstname" id="firstname" placeholder="Prénom *" value={firstname} onChange={(e) => setFirstname(e.target.value)} required/>
          </div>
        </div>
{/*         <div>
          <label htmlFor="adress" aria-label="adress"/>
          <input type="text" name="adress" id="adress" placeholder="Adresse *"/>
        </div>
        <div>
          <label htmlFor="postcode" aria-label="postcode"/>
          <input type="text" name="postcode" id="postcode" placeholder="Code postal *"/>
        </div>
        <div>
          <label htmlFor="city" aria-label="city"/>
          <input type="text" name="city" id="city" placeholder="Ville *"/>
        </div>
        <div>
          <label htmlFor="pseudo" aria-label="pseudo"/>
          <input type="text" name="pseudo" id="pseudo" placeholder="Pseudo"/>
        </div>
        <div>
          <label htmlFor="avatar" aria-label="avatar"/>
          <input type="text" name="avatar" id="avatar" placeholder="Choix de l'avatar"/>
        </div> */}
        <div>
          <button type="submit" value="S'inscrire">S'inscrire</button>
        </div>
      </form>
    </section>
  );
}

export default SignUpForm;