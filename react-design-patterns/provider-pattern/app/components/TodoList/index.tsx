"use client"

import { useEffect, useState } from "react"
import { Todo } from "../../types/Todo"
import { useTodo } from "@/app/hooks/useTodo"

import React from "react"

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(true)
  const { addTodo } = useTodo()

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("/api/get-todo")
        const data: Todo[] = await response.json()
        setTodos(data)
        setLoading(false)
      } catch (error) {
        console.error("Failed to fetch todos", error)
        setLoading(false)
      }
    }
    fetchTodos()
  }, [addTodo])

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <h1>Todos</h1>
      <ul className="text-white">
        {todos.map((todo, index) => (
          <li key={index}>
            <strong>{todo.category}</strong>: {todo.item} -{" "}
            {todo.complete ? "Complete" : "Incomplete"}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
