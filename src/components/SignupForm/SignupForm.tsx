import { useState } from "react";

function SignUpForm() {
  const [modalContent, setModaleContent] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section>
      <h1>Créer votre compte</h1>
      <form action="" method="post">
        <div>
          <label for="email" id="email"/>
          <input type="email" name="email" id="email" placeholder="Adresse mail"/>
        </div>
        <div>
          <label htmlFor="password" id="password"/>
          <input type="password" name="password" id="password" placeholder="Mot de passe"/>
        </div>
        <div>
          <label for="password" id="password"/>
          <input type="password" name="password" id="password" placeholder="Confirmation"/>
        </div>
        <div>
          <label for="lastname" id="lastname"/>
          <input type="text" name="lastname" id="lastname" placeholder="Nom"/>
        </div>
        <div>
          <label for="firstname" id="firstname"/>
          <input type="text" name="firstname" id="firstname" placeholder="Prénom"/>
        </div>
        <div>
          <label for="adress" id="adress"/>
          <input type="text" name="adress" id="adress" placeholder="Adresse"/>
        </div>
        <div>
          <label for="postcode" id="postcode"/>
          <input type="number" name="postcode" id="postcode" placeholder="Code postal"/>
        </div>
        <div>
          <label for="city" id="city"/>
          <input type="text" name="city" id="city" placeholder="Ville"/>
        </div>
        <div>
          <label for="pseudo" id="pseudo"/>
          <input type="text" name="pseudo" id="pseudo" placeholder="Pseudo"/>
        </div>
        <div>
          <label for="avatar" id="avatar"/>
          <input type="text" name="avatar" id="avatar" placeholder="Choix de l'avatar"/>
        </div>
      </form>
    </section>
  );

;
}

export default SignUpForm;