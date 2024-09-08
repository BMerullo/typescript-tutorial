import React from "react"
import styles from "../Full-screen-hero/full-screen-hero.module.scss"
type FullScreenHeroProps = {
  heroImg: string
}

const FullScreenHero: React.FC<FullScreenHeroProps> = ({ heroImg }) => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        className="absolute inset-0 object-cover w-full h-full"
        src={heroImg}
        alt="Hero Image"
      />
    </div>
  )
}

export default FullScreenHero
