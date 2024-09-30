"use client"

import React, { useState } from "react"
import { Game } from "@/types"
import { useGame } from "@/app/hooks/useGame"
import { selectionSetMatchesResult } from "@apollo/client/cache/inmemory/helpers"

const GameForm: React.FC = () => {
  const [category, setCategory] = useState("")
  const [gameTitle, setGameTitle] = useState("")
  const [img, setImg] = useState("")
  const [message, setMessage] = useState("")
  const { addGame, setAddGame } = useGame()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!category || !gameTitle || !img) {
      alert("Please fill out all fields")
      return
    }

    const newGame: Game = {
      category,
      gameTitle,
      img,
    }

    const response = await fetch("api/save-game", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGame),
    })

    const data = await response.json()
    setMessage(data.message)
    setAddGame(!addGame)
    setCategory("")
    setGameTitle("")
    setImg("")
  }
  return (
    <div>
      <h1>Add a Game to the List</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="category">Category</label>
          <select
            className="text-black"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a Category</option>
            <option value="Action/ Adventure">Action/ Adventure</option>
            <option value="RPG">RPG</option>
            <option value="Shooter">Shooter</option>
            <option value="Strategy">Strategy</option>
          </select>
        </div>
        <div>
          <label htmlFor="gameTitle">Game Title</label>
          <input
            className="text-black"
            type="text"
            id="gameTitle"
            value={gameTitle}
            onChange={(e) => setGameTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="img">Image</label>
          <input
            className="text-black"
            type="text"
            id="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <button className="bg-green-700 px-4" type="submit">
          Add Game
        </button>
      </form>
    </div>
  )
}

export default GameForm
