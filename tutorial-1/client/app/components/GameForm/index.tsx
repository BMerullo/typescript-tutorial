"use client"

import React, { useState } from "react"
import { Game } from "@/types"
import { useGame } from "@/app/hooks/useGame"
import styles from "../GameForm/game-form.module.scss"

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
      <h2 className={styles.title}>Add a Game to the List</h2>
      <form onSubmit={handleSubmit} className="p-8">
        <div>
          <div className="flex flex-col">
            <label htmlFor="category" className="mb-2 font-semibold">
              Category
            </label>
            <select
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black w-60 m-auto"
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
              <option value="Platform">Platform</option>
              <option value="Racing">Racing</option>
              <option value="Sports">Sports</option>
            </select>
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="gameTitle">Game Title</label>
            <input
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black w-60 m-auto"
              type="text"
              id="gameTitle"
              value={gameTitle}
              onChange={(e) => setGameTitle(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="img">Image (URL)</label>
            <input
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black w-60 m-auto"
              type="text"
              id="img"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              required
            />
          </div>
        </div>
        <button className="bg-indigo-700 px-4 mt-4 rounded-md " type="submit">
          Add Game
        </button>
      </form>
    </div>
  )
}

export default GameForm
