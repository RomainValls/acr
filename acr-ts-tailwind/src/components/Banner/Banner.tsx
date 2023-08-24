import React from "react"
import "./Banner.css"

interface BannerProps {
  imageUrl: string //img url. potential problem - where to host the images?
  altText: string
  heading: string // the text on the banner
}

const Banner: React.FC<BannerProps> = ({ imageUrl, altText, heading }) => {
  const bannerStyles: React.CSSProperties = {
    width: "100%",
    height: "auto",
  }

  return (
    <>
      <div className="big-img">
        <img src={imageUrl} alt={altText} className="banner-img" />
        <div className="overlay">
          <h2>{heading}</h2>
        </div>
      </div>
    </>
  )
}

export default Banner
