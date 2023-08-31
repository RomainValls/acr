import React from "react"
import { Link as ScrollLink } from "react-scroll"
import { Element } from "react-scroll"
import Article from "../components/Article/Article"
import "./Partners.css"

// PAGE STRUCTURE

// intro and menu with links to elements on the page:

// VILLES section : div -> Element -> Article (11)
// HOPITAUX section: div -> Element -> Article (2)
// ENTREPRISES section: div -> Element -> Article (4)
// REGIONS section: div -> Element -> Article (1)

function Partners() {
  return (
    <>
      <div id="partnters-intro-container">
        <h1 className="partners-title">Partenaires</h1>
        <div className="intro-container">
          <ul className="partners-list">
            <li>
              <ScrollLink to="villes" smooth={true} duration={500}>
                Villes
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="hopitaux" smooth={true} duration={500}>
                Hôpitaux
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="entreprises" smooth={true} duration={500}>
                Entreprises, institutions
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="regions" smooth={true} duration={500}>
                Départements, Régions
              </ScrollLink>
            </li>
          </ul>
          <p id="p-intro">
            Pour périniser notre activité, des "conventions d'objectifs et de
            moyens" sont signées avec des villes. Nous signons également des
            contracts et conventions ponctuels avec d'autres partenaires
            institutionnel ou privés.
          </p>
        </div>
      </div>

      <div id="villes">
        <h2 className="partners-title">Villes</h2>
        <Element name="villes" className="section">
          <Article
            title="Fontenay-sous-bois (94)"
            text="Fontenay compte 55 000 habitants. Ville pionnière pour la gestion des chats en ville. Depuis sa création, l'association travaille avec une convention relative à la gestion des chats sur la ville.
            En 2001, la ville de Fontenay a organisé la première journée de l'animal, en collaboration avec A.C.R. Depuis 2014, cette journée est jumelée avec la journée Nature en Ville. Cette année nous avons lancé le Trophée du corniaud et du chat de gouttière. Pour rendre hommage à tous nos compagnons sans pédigrée et pour montrer le lien étroit et fort qui unit l'homme et l'animal.
            En 2002, la ville met à disposition un terrain peu exploitable en urbanisme, mais parfait pour y installer des abris chats.
            Depuis cette date, la ville fournit en croquettes les nourriciers recensés.
            La ville de Fontenay-sous-bois compte aussi 3 pigeonniers.
            En 24 ans, nous avons géré 2 100 chats de Fontenay."
            imgSrc="https://static.wixstatic.com/media/a8e4cf_8fc6b01208d047f5af98c3c974a46869.jpg/v1/fill/w_263,h_183,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a8e4cf_8fc6b01208d047f5af98c3c974a46869.jpg"
            imgAlt="Fontenay-sous-bois"
          />

          <Article
            title="Gagny (93)"
            text="Gagny compte 39 000 habitants.
            Gagny nous a fait confiance et pendant 8 ans, nous avons géré les chats sur la ville.
            En 8 ans, nous avons géré 480 chats sur la ville. Nous avons également un partenariat avec Pet's & Co, association de Protection animale créée en Juillet 2020. Elle vient en aide aux animaux des villes qu'ils soient domestiques ou sauvages. Fin 2022 Pet's & Co reprend derrière ACR la ville où elle est implantée."
            imgSrc="https://static.wixstatic.com/media/a8e4cf_14397760f15c42ad84133aab07488e04.jpg/v1/fill/w_269,h_200,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a8e4cf_14397760f15c42ad84133aab07488e04.jpg"
            imgAlt="Gagny"
          />

          <Article
            title="Ivry-sur-Seine (94)"
            text="Ivry compte 58 000 habitants.
        En 2012, la ville d'Ivry-sur-Seine a signé une convention avec ACR pour permettre le lien sociale généré par la présence des chats libres en ville. En 10 ans, nous avons géré environ 380 chats sur la ville. En 2023, la ville arrête son partenariat avec ACR, pas assez de budget ou plus pour certains animaux !!!"
            imgSrc="https://static.wixstatic.com/media/a8e4cf_931a0714b4be496ebc5965ffc7066e6f.jpg/v1/fill/w_264,h_183,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a8e4cf_931a0714b4be496ebc5965ffc7066e6f.jpg"
            imgAlt="Ivry-sur-Seine"
          />

          <Article
            title="Montreuil (93)"
            text="Montreuil compte 110 000 habitants.La ville de Montreuil a signé une convention avec ACR pour permettre le lien sociale généré par la présence des chats libres en ville.
        Un refuge nous a été octroyé par la ville de Montreuil en août 2019, la partie soins, capture est sur ce site au 33 rue de l'Ermitage et la partie adoption est encore au 1 rue Malot à Montreuil."
            imgSrc="https://static.wixstatic.com/media/a8e4cf_2279e97dc9504c5a8152746eb5d74f01~mv2.jpg/v1/fill/w_277,h_158,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/le%2033%20vue%20d'ext.jpg"
            imgAlt="Montreuil"
          />

          <Article
            title="Montreuil (93) - Est Ensemble Habitat - 2023"
            text="Dans le contexte où la ville de Montreuil s'engage dans une démarche en faveur du respect de tous les êtres vivants, une convention à été signée en 2019 avec OPH qui devient aujourd'hui Est Ensemble Habitat pour permettre d'appliquer une organisation éthique des chats des rues. Un aménagement d'espace dédié est organisé chaque année avec les habitants-es, nouriciers-es et Est Ensemble Habitat.
        Un-e nourricier-e nourrit et entretient ces espaces dédiés de leurs protégés tous les jours avant et/ou après leur travail. L'état de santé des chats est suivi par ACR : stérilisés, identifiés, déparasités, et soignés si nécessaire. Ces espaces sont des conforts pour les et une vision agréable pour les habitants. Les abris chats installés à différents endroits permettent, certes, d'abriter les chats mais aussi de leur reconnaître officiellement leur place au milieu de la cité."
            imgSrc="https://static.wixstatic.com/media/a8e4cf_78a624bb34754d31845302de6e8c5de7~mv2.jpg/v1/fill/w_258,h_181,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Sites%20d%C3%A9di%C3%A9s%20au%20chats%20OPH%20Mt.jpg"
            imgAlt="Montreuil "
          />

          <Article
            title="Orly (94) "
            text="Orly compte 25 000 habitants. L'association assure une prestation relative à la gestion des chats sur la ville.
        Deux  pigeonniers et une canisette sont installés sur la ville.
        Depuis 2006, en 17 ans, nous avons géré 440 chats."
            imgSrc="https://static.wixstatic.com/media/a8e4cf_760cdec542424cb7915edfa66c32c326.jpg/v1/fill/w_264,h_183,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a8e4cf_760cdec542424cb7915edfa66c32c326.jpg"
            imgAlt="Orly"
          />

          <Article
            title="Rosny-sous-Bois (93)"
            text="Rosny compte 45 000 habitants.
        L'association assure une prestation relative à la gestion des chats sur la ville depuis 2006.
        La ville de Rosny-sous-Bois compte aussi 2 pigeonniers et une ferme pédagogique.
        En 17 ans, nous avons géré plus d'un millier de chats sur la ville de Rosny."
            imgSrc="https://static.wixstatic.com/media/a8e4cf_0f8d14ddeb0f47bbb8545a6b2d254ed8~mv2.jpg/v1/fill/w_265,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/20201106_122753%20(2)%20-%20Copie.jpg"
            imgAlt="Rosny-sous-Bois "
          />

          <Article
            title="Villemomble "
            text="Villemomble compte 29 000 habitants.
        En 2012, la ville de Villemomble a signé une convention avec ACR.
        L'association a établi un diagnostic de la situation de la ville.
        En 11 ans, nous avons réalisé 760 captures à but de stérilisation de chats libres."
            imgSrc="https://static.wixstatic.com/media/a8e4cf_a76eb1b91ec84482a3bf4ea839c848f1.jpg/v1/fill/w_273,h_205,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a8e4cf_a76eb1b91ec84482a3bf4ea839c848f1.jpg"
            imgAlt="Villemomble "
          />

          <Article
            title="Vincennes (94)"
            text="Vincennes compte 49 500 habitants.
        En 2020 et 2021, la ville de Vincennes a signé une prestation avec ACR.
        Nous avons réalisé une trentaine de captures à but de stérilisation de chats libres."
            imgSrc="https://static.wixstatic.com/media/a8e4cf_7ceab7a4216e40b3aa5468d9bf134035~mv2.jpg/v1/fill/w_268,h_199,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a8e4cf_7ceab7a4216e40b3aa5468d9bf134035~mv2.jpg"
            imgAlt="Vincennes "
          />

          <Article
            title="Villemomble (93) "
            text="Villemomble compte 29 000 habitants. En 2012, la ville de Villemomble a signé une convention avec ACR.
        L'association a établi un diagnostic de la situation de la ville.
        En 11 ans, nous avons réalisé 760 captures à but de stérilisation de chats libres."
            imgSrc="https://static.wixstatic.com/media/a8e4cf_a76eb1b91ec84482a3bf4ea839c848f1.jpg/v1/fill/w_273,h_205,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a8e4cf_a76eb1b91ec84482a3bf4ea839c848f1.jpg"
            imgAlt="Villemomble "
          />

          <Article
            title="Charenton le Pont (94)"
            text="Charenton le Pont compte 30 000 habitants.
        En 2022 et 2023, la ville de Charenton le Pont a signé une prestation avec ACR.
        Nous avons réalisé une vingtaine de captures à but de stérilisation de chats libres."
            imgSrc="https://static.wixstatic.com/media/a8e4cf_4126442406a14d05846b6735e232fe0f~mv2.jpg/v1/fill/w_268,h_199,al_c,lg_1,q_80,enc_auto/charenton_edited.jpg"
            imgAlt="Charenton le Pont"
          />
        </Element>
      </div>

      <div id="hopitaux">
        <Element name="hopitaux" className="section">
          <h2 className="partners-title">Hôpitaux</h2>
          <Article
            title="Hôpital (94)"
            text="En 2003, une convention a été signée avec ce centre hospitalier et l'association. Au début de cette convention nous avons stérilisé et identifié tous les chats de l'hôpital.
        Notre mission aujourd'hui consiste à capturer de nouveaux chats dès leur arrivée en organisant des espaces dédiés aux chats libres sur l'hôpital où ils vivent en liberté et ne se reproduisent plus."
            imgSrc="https://static.wixstatic.com/media/a8e4cf_c7e14c9661e74bc992d818393cfded9f.jpg/v1/fill/w_276,h_207,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a8e4cf_c7e14c9661e74bc992d818393cfded9f.jpg"
            imgAlt="Hôpital "
          />

          <Article
            title="Hôpital  (95)"
            text="En 2012, une convention a été signée avec ce centre hospitalier pour 18 mois.
        En 2014, nous avons signé une nouvelle convention établie pour 3 ans.
        Notre mission consiste à capturer la quarantaine de chats et à les organiser (capture, stérilisation, identification, installation de restos et d'abris chats) sur les espaces verts de l'hôpital où ils vivent en liberté et ne se reproduisent plus. En effet, nombre de résidents organisent leur journée autour de ces animaux : où sont-ils, que font-ils, ils leur collectent de la nourriture et leur fabriquent de petits objets pour jouer. Nombre de salariés et de visiteurs nourrissent discrètement ces chats.
        Dans ce cadre, l'originalité de cette convention réside dans le projet des AAA (Activité Associant l'Animal) sur des secteurs comme l'EHPAD (maison de retraite) ou la Psychiatrie. La présence des chats peut être un atout considérable dans la prise en charge de la personne âgée ou du patient atteint de pathologie psychique."
            imgSrc="https://static.wixstatic.com/media/a8e4cf_029ae9bc3895401ba8b823328bea6388.jpg/v1/fill/w_294,h_196,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a8e4cf_029ae9bc3895401ba8b823328bea6388.jpg"
            imgAlt="Hôpital"
          />
        </Element>
      </div>

      <div id="entreprises">
        <h2 className="partners-title">Entreprises</h2>
        <Element name="entreprises" className="section">
          <Article
            title="Animaux Relax"
            text="ACR tient à remercier animaux-relax pour son don de 1 000€ en septembre 2020.

            Comparateur d'assurances animaux
            Lien : https://animaux-relax.com/
    
            Les offres d'assurances pour animaux ne manquent pas pour les propriétaires. Cela étant il n'est pas toujours simple de s'y retrouver et de devoir choisir parmi la diversité d'offres et de formules des mutuelles pour chien et chat. Animaux-relax.com propose alors un comparateur en ligne d'assurance
            animaux totalement gratuit et sans engagement.
            Animaux-relax.com permet également aux internautes de retrouver des explications claires sur l'assurance pour chien et pour chat, des conseils, des enquêtes et des informations sur nos animaux de compagnie rédigés par des professionnels du monde animal (vétérinaires, comportementalistes, éducateurs,toiletteurs...)."
            imgSrc="https://static.wixstatic.com/media/a8e4cf_98cf6d9b17664bff820f67fe33c71535~mv2.jpg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/assurance-animaux-droite.jpg"
            imgAlt="animaux-relax"
          />

          <Article
            title="L'Oréal"
            text="Les salariés du site de Chevilly-la-Rue, qui héberge la Direction Recherche et Innovation du Groupe L'Oréal, se soucient du bien être des chats qu'ils croisent au quotidien dans le jardin de l'entreprise.
            En plus de les nourrir, ils ont demandé à leur direction de pallier à la reproduction anarchique qui menaçait de devenir problématique.
            ACR a capturé et stérilisé les 27 chats qui ont retrouvé leur parc favori. Ils vont bien et nous remercions le personnel bienveillant d'avoir pensé à eux."
            imgSrc="https://static.wixstatic.com/media/a8e4cf_43a4fd52856449dcb46bee7f6725794c.png/v1/fill/w_112,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a8e4cf_43a4fd52856449dcb46bee7f6725794c.png"
            imgAlt="l'oréal"
          />

          <Article
            title="SNDA - Société Nationale pour la Défense des Animaux"
            text="Ses objectifs:

            protéger, défendre les animaux, lutter contre toute souffrance qui leur est infligée et assurer l'éducation du public en ce sens
            
            étendre son action sur tout le territoire français, ainsi que dans d'autres pays
            
            oeuvrer pour que la législation et la réglementation existantes protégeant les animaux soient respectées, intervenir pour que de nouveaux textes législatifs et réglementaires protégeant les animaux soient promulgués
            
            informer le public et assister les personnes qui sollicitent des conseils."
            imgSrc="https://static.wixstatic.com/media/a8e4cf_3dd689c8d20947959a8b00fffa5c9896.jpg/v1/fill/w_112,h_32,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a8e4cf_3dd689c8d20947959a8b00fffa5c9896.jpg"
            imgAlt="SNDA"
          />

          <Article
            title="EDF"
            text="Conformément à sa charte éthique (le point 2 concerne le respect de l'environnement), le site EDF 'Cap Ampère', situé à Saint-Denis (93), a financé la capture et la stérilisation de 20 chats (10 mâles et 10 femelles). 5 abris ont été placés sur le site pour l'occasion.

            Des chats en bonne santé, des salariés satisfaits veillant au bien être quotidien de leurs colocataires et un directeur du site qui soutient leur démarche. Une belle mise en pratique de la 
            
            charte éthique d'EDF"
            imgSrc="https://static.wixstatic.com/media/a8e4cf_ef22571fbea748be93698ae4edc50259.png/v1/fill/w_57,h_77,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a8e4cf_ef22571fbea748be93698ae4edc50259.png"
            imgAlt="EDF"
          />
        </Element>
      </div>

      <div id="regions">
        <h2 className="partners-title">Régions</h2>
        <Element name="regions" className="section">
          <Article
            title="Région Ile-de-France"
            text="La Région Ile-de-France a financé 50% des nouveaux équipements pour notre refuge. Des racks de 3 cages pour la convalescence de nos chats capturés, du matériel informatique pour le bon fonctionnement de nos structures, un kärcher pour un bon nettoyage du matériel et des locaux. Cela a permis une amélioration des conditions de travail et une augmentation de la capacité d'accueil des chats dans notre refuge à Montreuil.
                ACR a signé la charte régionale des valeurs de la république et de la laïcité.
                Merci à la Région Ile de France pour son aide en faveur des animaux de compagnie."
            imgSrc="https://static.wixstatic.com/media/a8e4cf_6af25097210f484ba0d7f5f9c64c6ba4~mv2.jpg/v1/fill/w_77,h_77,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/LOGO_RIDF_2019_WEB_1920x1080.jpg"
            imgAlt="Région Ile-de-France"
          />
        </Element>
      </div>
    </>
  )
}

export default Partners
