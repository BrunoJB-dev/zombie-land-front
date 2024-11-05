import './SignupForm.scss';

function SignUpForm() {

  return (
    <section className="SignUpSection">
      <h1>Créer votre compte</h1>
      <form className="signup-form"action="" method="post">
        <div>
          <label htmlFor="email" aria-label="email"/>
          <input type="email" name="email" id="email" placeholder="Adresse mail *"/>
        </div>
        <div className='password'>
          <div>
            <label htmlFor="password" aria-label="password"/>
            <input type="password" name="password" id="password" placeholder="Mot de passe *"/>
          </div>
          <div>
            <label htmlFor="passwordConfirmation" aria-label="password"/>
            <input type="password" name="passwordConfirmation" id="passwordConfirmation" placeholder="Confirmation *"/>
          </div>
        </div>
        <div className='identity'>
          <div>
            <label htmlFor="lastname" aria-label="lastname"/>
            <input type="text" name="lastname" id="lastname" placeholder="Nom *"/>
          </div>
          <div>
            <label htmlFor="firstname" aria-label="firstname"/>
            <input type="text" name="firstname" id="firstname" placeholder="Prénom"/>
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