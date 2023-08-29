import React from "react"
import { Link } from "react-router-dom"
import "./Footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="">
      <div className="container-footer">
        <div className="logo-footer">
          <img
            alt="logo acr"
            src="https://static.wixstatic.com/media/a8e4cf_2ea98f3c480041abb2002c704ef9dea1.jpg/v1/fill/w_93,h_206,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a8e4cf_2ea98f3c480041abb2002c704ef9dea1.jpg"
          />
        </div>
        <div id="about-footer">
          <h3 className="list-title">
            A.C.R. <br /> Association Chats des Rues
          </h3>
          <br />
          <p>
            1 rue Malot - 93100 Montreuil <br />
            acr.montreuil@gmail.com <br />
            Tel: 01 48 51 31 32
          </p>
          <br />
          <p>
            Ouvert tous les jours <br />
            lundi au dimanche de 17h à 18h - jours fériés compris
          </p>
          <p>
            Il est préférable de téléphoner avant, car nous recevons sur
            rendez-vous pour les adoptions.
          </p>
        </div>

        <ul className="">
          <li className="list-title">
            <Link to="#" className="">
              L'association
            </Link>
          </li>
          <li className="">
            <Link to="#" className="">
              L'équipe
            </Link>
          </li>
          <li className="">
            <Link to="#" className="">
              Missions
            </Link>
          </li>
          <li className="">
            <Link to="#" className="">
              Mediation
            </Link>
          </li>
          <li className="">
            <Link to="#" className="">
              Etude de terrain
            </Link>
          </li>
          <br />

          <li className="">
            <Link to="#" className="">
              Mentions légales
            </Link>
          </li>
        </ul>
        <ul className="">
          <li className="list-title">
            <Link to="#" className="">
              Partenaires
            </Link>
          </li>
          <li className="">
            <Link to="#" className="">
              Villes
            </Link>
          </li>
          <li className="">
            <Link to="#" className="">
              Régions IDF
            </Link>
          </li>
          <li className="">
            <Link to="#" className="">
              Hôpitaux
            </Link>
          </li>
          <li className="">
            <Link to="#" className="">
              Entreprises, institutions
            </Link>
          </li>
          <br />

          <li className="">
            <Link to="#" className="">
              Politique de confidentialité
            </Link>
          </li>
        </ul>
        <ul className="">
          <li className="list-title">
            <Link to="#" className="">
              Adoption
            </Link>
          </li>
          <li className="">
            <Link to="#" className="">
              Venez nous adopter
            </Link>
          </li>
          <li className="">
            <Link to="#" className="">
              Autres animaux
            </Link>
          </li>
          <br />
          <br />
          <br />

          <li className="">
            <Link to="#" className="">
              Contactez-nous
            </Link>
          </li>
        </ul>
        <ul className="">
          <li className="list-title">
            <Link to="#" className="">
              Vidéos
            </Link>
          </li>
          <li className="">
            <Link to="#" className="">
              Blog
            </Link>
          </li>
          <li className="">
            <Link to="#" className="">
              Les soirées citoyennes
            </Link>
          </li>
          <br />
          <br />
          <br />
          <li>
            <div className="socials-container">
              <Link to="#" className="">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/user-interface-line-38/24/Untitled-5-19-256.png"
                  alt="person"
                />
              </Link>
              <Link to="#" className="">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Facebook-Outline-512.png"
                  alt="fb"
                />
              </Link>
              <Link to="#" className="">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Instagram-Outline-256.png"
                  alt="insta"
                />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
