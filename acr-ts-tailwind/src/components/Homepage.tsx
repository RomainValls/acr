import React from "react"
import { Link } from "react-router-dom"
import Banner from "./Banner/Banner"
import Article from "./Article/Article"
import Button from "./Button/Button"
import ArticleHighlight from "./ArticleHighlight/ArticleHighlight"

const Homepage = () => {
  return (
    <>
      <div>
        <Banner
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg"
          altText="save the cats pls"
          heading="Hello from cats! meow meow"
        />

        <Article
          title="Nous souhaitons partager la ville avec les animaux qui nous entourent."
          text="Notre coeur de métier est la capture des chats dans le but de les stériliser, de les identifier et de les soigner. Ils sont ensuite remis en liberté dans des espaces dédiés, des nourriciers et des associations s'occupent de leur bien être. Les chats qui peuvent être adoptés sont accueillis au sein de notre refuge."
          imgSrc="https://media.istockphoto.com/id/1334070091/photo/pensive-bengal-cat-in-a-blue-tie-near-a-laptop-and-a-diary-sits-home-office-remote-work.jpg?s=612x612&w=0&k=20&c=vBp3dCwUVKXDxga-dESreruuLN24rAZYNr7Asc6KdtI="
          imgAlt="cat at work"
          buttonText="Nos missions"
          link="#"
        />

        <ArticleHighlight
          title="L'animal peut être une chance, un atout si l’on apprend à le connaître et si on lui donne sa place."
          text="La gestion respectueuse des chats de nos rues est aussi importante que la préservation des animaux de la planète. Et elle est à notre portée !
          Nous organisons des activités pédagogiques dans les centres de loisirs afin d'aborder ces sujets avec les enfants ains que des Activités Associant l'Animal (A.A.A.) avec des personnes âgées dans les jardins des maisons de retraite."
          imgSrc="https://www.news10.com/wp-content/uploads/sites/64/2022/07/Cat.jpg"
          imgAlt="cat cat"
          buttonText="Nos activités"
          link="#"
        />

        <Article
          title="ACR était invitée à une remise des trophées pour le label « Ville amie des animaux »"
          text="Depuis 2020, la Région distingue avec le label « Ville amie des animaux », de 1 à 3 pattes, les communes franciliennes qui œuvrent en faveur de la protection des animaux de compagnie, contre la maltraitance et l'abandon. Bravo aux associations, aux villes et merci à la région Ile de Fance pour cette initiative et bien d'autres encore sur la protection animale."
          imgSrc="https://npr.brightspotcdn.com/dims4/default/2cdd2f8/2147483647/strip/true/crop/2304x1419+0+787/resize/880x542!/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2014%2F07%2F11%2F167106079_custom-217cb0d7e3b801ecaa1f0b9d6d58efa076987ff3.jpg"
          imgAlt="a high cat"
          buttonText="Nos activités"
          link="#"
        />
      </div>
    </>
  )
}

export default Homepage
