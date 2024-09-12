import React from "react"
import styles from "./about.module.scss"
import { Family } from "@/types"
import axios from "axios"
import FullScreenHero from "../components/Full-screen-hero/full-screen-hero"

const about = () => {
  const heroImg =
    "https://i0.wp.com/www.the-pixels.com/wp-content/uploads/2019/11/The-Legend-of-Zelda-Links-Awakening.png?fit=1920%2C1080&ssl=1"
  return (
    <main>
      <FullScreenHero heroImg={heroImg} />
    </main>
  )
}

export default about
