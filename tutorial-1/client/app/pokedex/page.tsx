import React from "react"
import FullScreenHero from "../components/Full-screen-hero/full-screen-hero"

const page = () => {
  const heroImg =
    "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/06/the-15-best-starting-pokemon-of-the-series.jpg"
  return (
    <main>
      <FullScreenHero heroImg={heroImg} />
    </main>
  )
}

export default page
