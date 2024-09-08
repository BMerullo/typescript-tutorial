"use client"

import FullScreenHero from "./components/Full-screen-hero/full-screen-hero"
import styles from "./page/page.module.scss"
import React from "react"

export default function Home() {
  const heroImg =
    "https://www.godisageek.com/wp-content/uploads/links-awakening-preview-2-1024x576.jpg"

  return (
    <main>
      <FullScreenHero heroImg={heroImg} />
    </main>
  )
}
