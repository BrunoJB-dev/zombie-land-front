import "./APropos.scss"
import parc from '../../../public/ZombieLand-HomePage-Banner.webp';


function APropos() {
  return(
    <div>
      <h2>A propos du Parc Zombieland</h2>
      <div className="a-propos">
        <article className="article-apropos">
          <p>Bienvenue à Zombieland : le seul parc d’attractions en France où les frissons sont garantis… et peut-être même un peu de terreur ! Situé à Hébécrevon, en plein cœur de la Manche, Zombieland vous transporte dans un univers apocalyptique où les zombies règnent en maîtres et les humains n’ont qu’à bien se tenir.</p>
          <p>Avec 20 attractions uniques, le parc propose une gamme d’expériences adaptées aux amateurs de sensations fortes comme aux petits aventuriers. Venez défier la gravité sur le Zombie Escape Coaster, explorez les profondeurs du Labyrinthe Mortel, ou embarquez pour une mission en réalité virtuelle dans Virus Outbreak VR ! Pour les courageux, notre Apocalypse Karting vous offre une course déjantée à travers un paysage de ruines, tandis que le Safari Zombie vous emmène en tour de jeep au plus près des créatures… si vous osez !</p>
          <p>Que vous soyez ici pour affronter vos pires cauchemars ou simplement pour vous amuser avec un brin d’adrénaline, Zombieland est bien plus qu’un parc : c’est une aventure inoubliable qui vous poussera à défier vos limites dans une ambiance de fin du monde. Prêts pour l’aventure de votre vie ? Les zombies d’Hébécrevon n’attendent que vous ! 🧟</p>
        </article>
          <img className="img-apropos" src={parc} alt="le parc" />
      </div>
    </div>
  )
}

export default APropos;