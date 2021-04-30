import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = ({ showPerson }) => {
  return (
    <header className="hero">
      {showPerson && (
        <StaticImage
          src="../assets/person.png"
          alt="Person"
          className="hero-person"
          placeholder="blurred"
          layout="constrained"
        />
      )}
    </header>
  )
}

export default Hero
