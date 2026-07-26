"use client"

import React from "react"
import FullScreenHero from "../components/Full-screen-hero"
import GameForm from "../components/GameForm"
import GameList from "../components/GameList"
import { GameProvider } from "../context/GamesContext"

const Games = () => {
  const heroImg = "https://wallpapercave.com/wp/wp2276152.jpg"

  return (
    <GameProvider>
      <FullScreenHero heroImg={heroImg} />
      <GameForm />
      <GameList />
    </GameProvider>
  )
}

export default Games
