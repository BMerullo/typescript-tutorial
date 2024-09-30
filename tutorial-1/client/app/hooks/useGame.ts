import React, { useContext } from "react"
import { GameContext } from "../context/GamesContext"

export const useGame = () => {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error("useGame must be used withen a GameProvider")
  }
  return context
}
