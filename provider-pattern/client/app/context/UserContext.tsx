import React, { createContext, useContext, useState } from "react"
import { UserI } from "../types/User"

interface UserContextType {
  user: UserI | null
  setUser: React.Dispatch<React.SetStateAction<UserI | null>>
}
export const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserI | null>(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
