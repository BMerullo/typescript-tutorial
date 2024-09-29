import { createContext, useState, ReactNode } from "react"
import { AddTodo } from "../types/Todo" // Ensure AddTodo is a valid type/interface

interface AddTodoContextType {
  addTodo: AddTodo | null // Nullable in case it's not initialized
  setAddTodo: React.Dispatch<React.SetStateAction<AddTodo | null>>
}

export const AddTodoContext = createContext<AddTodoContextType | undefined>(
  undefined
)

interface AddTodoProviderProps {
  children: ReactNode
}

export const AddTodoProvider: React.FC<AddTodoProviderProps> = ({
  children,
}) => {
  const [addTodo, setAddTodo] = useState<AddTodo | null>(null) // Start with null or appropriate initial state

  return (
    <AddTodoContext.Provider value={{ addTodo, setAddTodo }}>
      {children}
    </AddTodoContext.Provider>
  )
}
