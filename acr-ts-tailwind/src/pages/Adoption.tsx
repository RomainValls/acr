import React from "react"
import Article from "../components/Article/Article"
import ArticleHighlight from "../components/ArticleHighlight/ArticleHighlight"

function Adoption() {
  return (
    <>
      <Article
        title="Venez nous adopter"
        text="Un de nos atouts est d’avoir un refuge dans l'est parisien. C'est-à-dire, une autre issue positive pour une grande partie des chats capturés.
Environ 350/400 chats sont adoptés chaque année dans notre refuge. Votre chat ne cessera de vous remercier de lui avoir donné une famille ! Mais sachez qu'à deux, ils peuvent jouer, échanger, se disputer et se réconcilier dans leur langage, et ne pas subir vos absences. Et vous serez moins culpabilisé de sortir. A méditer..."
        imgSrc="https://media-be.chewy.com/wp-content/uploads/2018/04/19152547/getting_a_kitten_are_you_ready.jpg"
      />

      <div>
        <p>* cat profile cards*</p>
        <ol>
          <li>cat</li>
          <li>cat</li>
          <li>cat</li>
          <li>cat</li>
          <li>cat</li>
        </ol>
      </div>

      <ArticleHighlight
        title="L'acquisition d'un animal est une responsabilité"
        text="Elle engage sur plusieurs années celui qui accueille chez lui un chat, un chien, un lapin ou tout autre animal dont la vie va dépendre de lui.
    Chaque année en France, des dizaines de milliers d'animaux de compagnie sont abandonnés par leurs maîtres qui renoncent ou ignorent la responsabilité qu’ils ont prise en les adoptant. Rien que cet été, toutes les 3 minutes, un animal connaîtra ce sort qui lui réserve de longues années parfois à attendre une nouvelle famille.
    Cette année, la Journée mondiale contre l'abandon porte le message de la responsabilité que chaque maître prend en adoptant."
        imgSrc="https://www.purina-arabia.com/sites/default/files/2020-11/Adopting%20a%20Cat%20or%20KittenTEASER.jpeg"
        buttonText="Conseils pour les futurs adoptants"
        link="#"
      />

      <Article
        title="Participation financière"
        text="Nous acceptons chèque ou espèce mais pas de carte bancaire 
        Si vous choisissez un chaton, elle varie de 280€ à 320€ pour un chaton. Ces prix incluent la primo vaccination ou les 2 premiers vaccins, l'identification et la stérilisation. La stérilisation s'effectue dans une clinique vétérinaire quand le chaton atteint l'âge de 5 à 6 mois.
        Si vous choisissez un chat adulte, elle varie de 210€ à 240€. Cette participation inclue la stérilisation, l'identification, le vermifuge, l'anti-puces, primo voir le 2ème vaccin. Nos chats et chatons ne sont pas testés Felv et Fiv."
      />

      <Article
        title="Famille d'accueil (FA)"
        text="Toute l'année et surtout en période estivale, nous bénéficions d'un réseau de familles d'accueil. Ces bénévoles accueillent des chats et des chatons chez eux. Cela permet de sociabiliser les craintifs, de passer une convalescence longue mais plus agréable qu'en cage, de préserver les chatons de maladies éventuelles.
        Si vous habitez à proximité du refuge, vous pouvez devenir famille d'accueil ! Renseignez-vous en nous envoyant un mail : acr.montreuil@gmail.com"
      />
    </>
  )
}

export default Adoption
