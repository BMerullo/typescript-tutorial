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
    <>
      <section className=" p-9  md:p-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
        {games.map((game, index) => (
          <div key={index}>
            <div className="w-100 h-64 overflow-hidden bg-gray-200 rounded-lg">
              <img
                className="w-full h-full object-cover "
                src={game.img}
                alt={game.gameTitle}
              />
            </div>
            <div className="text-white  mt-8 rounded-md">
              <h2>{game.gameTitle}</h2>
              <h3>{game.category}</h3>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default GameList
