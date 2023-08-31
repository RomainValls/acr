import React from "react"

import "./Article.css"
import Button from "../Button/Button"

interface ArticleProps {
  title?: string
  text?: string
  imgSrc?: string
  imgAlt?: string
  buttonText?: string
  link?: string
}

const Article: React.FC<ArticleProps> = ({
  title,
  text,
  imgSrc,
  imgAlt,
  buttonText,
  link,
}) => {
  return (
    <>
      <div className="container">
        <div className="img-container">
          <img src={imgSrc} alt={imgAlt} />
        </div>

        <div className="article-container">
          {title && <h2 className="article-title">{title}</h2>}
          {text && <p className="article-text">{text}</p>}
          {buttonText && link && <Button buttonText={buttonText} link={link} />}
        </div>
      </div>
    </>
  )
}

export default Article
