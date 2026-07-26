"use client"

import FullScreenHero from "./components/Full-screen-hero"
import styles from "./page/page.module.scss"
import React from "react"

export default function Home() {
  const heroImg = "https://i.redd.it/at7e0bhswfg21.png"

  return (
    <main>
      <FullScreenHero heroImg={heroImg} />
    </main>
  )
}
