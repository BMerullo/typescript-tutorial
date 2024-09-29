import React, { createContext, useState, ReactNode } from "react"
import { Todo } from "../types/Todo"

// Define the context type
interface TodoContextType {
  todo: Todo | null // Use 'todo' instead of 'Todo' to match state
  setTodo: React.Dispatch<React.SetStateAction<Todo | null>>
}

// Create the context
export const TodoContext = createContext<TodoContextType | undefined>(undefined)

// Define the context provider component
interface TodoProviderProps {
  children: ReactNode
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todo, setTodo] = useState<Todo | null>(null)

  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      {children}
    </TodoContext.Provider>
  )
}
