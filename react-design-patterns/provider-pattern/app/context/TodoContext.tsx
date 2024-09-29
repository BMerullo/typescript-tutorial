import React, { createContext, useState, ReactNode } from "react"
import { Todo, AddTodo } from "../types/Todo"

// Define the context type
interface TodoContextType {
  todo: Todo | null // Use 'todo' instead of 'Todo' to match state
  addTodo: boolean
  setTodo: React.Dispatch<React.SetStateAction<Todo | null>>
  setAddTodo: React.Dispatch<React.SetStateAction<boolean>>
}

// Create the context
export const TodoContext = createContext<TodoContextType | undefined>(undefined)

// Define the context provider component
interface TodoProviderProps {
  children: ReactNode
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todo, setTodo] = useState<Todo | null>(null)
  const [addTodo, setAddTodo] = useState<boolean>(false)

  return (
    <TodoContext.Provider value={{ todo, setTodo, addTodo, setAddTodo }}>
      {children}
    </TodoContext.Provider>
  )
}
