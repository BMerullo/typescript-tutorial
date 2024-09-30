import React, { createContext, useState, ReactNode } from "react"
import { Game, AddGame } from "../../types"

interface GameContextType {
  game: Game | null
  addGame: boolean
  setGame: React.Dispatch<React.SetStateAction<Game | null>>
  setAddGame: React.Dispatch<React.SetStateAction<boolean>>
}

export const GameContext = createContext<GameContextType | undefined>(undefined)

interface GameProviderProps {
  children: ReactNode
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [game, setGame] = useState<Game | null>(null)
  const [addGame, setAddGame] = useState<boolean>(false)

  return (
    <GameContext.Provider value={{ game, setGame, addGame, setAddGame }}>
      {children}
    </GameContext.Provider>
  )
}
