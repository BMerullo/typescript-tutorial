"use client"

import React, { useState } from "react"
import { Todo } from "@/app/types/Todo"
import { useTodo } from "@/app/hooks/useTodo"

const TodoForm: React.FC = () => {
  const [category, setCategory] = useState("")
  const [item, setItem] = useState("")
  const [message, setMessage] = useState("")
  const { addTodo, setAddTodo } = useTodo()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!category || !item) {
      alert("Please fill out all fields")
      return
    }

    const newTodo: Todo = {
      category,
      item,
      complete: false,
    }

    const response = await fetch("/api/save-todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })

    const data = await response.json()
    setMessage(data.message)
    setAddTodo(!addTodo)
    setCategory("")
    setItem("")
  }

  return (
    <div className="bg-gray-900">
      <h1>Add a New Todo</h1>
      <form onSubmit={handleSubmit}>
        <div className="p-8 ">
          <label htmlFor="category">Category:</label>
          <input
            className="text-black"
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="p-8 ">
          <label htmlFor="category">Task:</label>
          <input
            className="text-black"
            type="text"
            id="item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-green-700">
          Submit
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default TodoForm
