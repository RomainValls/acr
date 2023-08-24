import React from "react"
import "./ArticleHighlight.css"
import Button from "../Button/Button"

interface ArticleHighlightProps {
  title: string
  text: string
  imgSrc: string
  imgAlt: string
  buttonText: string
  link: string
}

const ArticleHighlight: React.FC<ArticleHighlightProps> = ({
  title,
  text,
  imgSrc,
  imgAlt,
  buttonText,
  link,
}) => {
  return (
    <>
      <div className="containerHL">
        <div className="article-container">
          <h2 className="article-title">{title}</h2>
          <p className="article-text">{text}</p>
          <Button buttonText={buttonText} link={link} />
        </div>
        <div className="img-container">
          <img src={imgSrc} alt={imgAlt} />
        </div>
      </div>
    </>
  )
}

export default ArticleHighlight
