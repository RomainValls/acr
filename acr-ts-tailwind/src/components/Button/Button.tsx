import React from "react"
import "./Button.css"

interface ButtonProps {
  buttonText: string
  link: string
}

const Button: React.FC<ButtonProps> = ({ buttonText, link }) => {
  return (
    <a href={link} className="orange-button">
      {buttonText}
    </a>
  )
}

export default Button
