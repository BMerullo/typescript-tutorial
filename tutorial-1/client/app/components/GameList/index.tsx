"use client"

import React, { useEffect, useState } from "react"
import { Game } from "@/types"
import { useGame } from "@/app/hooks/useGame"

const GameList = () => {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)
  const { addGame } = useGame()

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await fetch("api/get-game")
        const data: Game[] = await response.json()
        setGames(data)
        setLoading(false)
      } catch (error) {
        console.error("Failed to fetch game", error)
        setLoading(false)
      }
    }
    fetchGame()
  }, [addGame])
  return (
    <div>
      <h1>Listed Games</h1>
      <ul>
        {games.map((game, index) => (
          <li key={index}>
            <h3>{game.category}</h3>
            <h4>{game.gameTitle}</h4>
            <img src={game.img} alt={game.gameTitle} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GameList
