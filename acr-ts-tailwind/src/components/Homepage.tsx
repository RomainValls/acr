import React from "react"
import Banner from "./Banner/Banner"
import Article from "./Article/Article"
import Button from "./Button/Button"

const Homepage = () => {
  return (
    <>
      <Banner
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg"
        altText="save the cats pls"
        heading="Hello from cats! meow meow"
        //here - buttons
      />
      <Article />
      <Button buttonText="click click" link="#" />
      <Article />
      <Button buttonText="meow meow" link="#" />
      <Article />
    </>
  )
}

export default Homepage
