"use client"

import React, { useState } from "react"
import { Todo } from "@/app/types/Todo"

const TodoForm: React.FC = () => {
  const [category, setCategory] = useState("")
  const [item, setItem] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

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

    setCategory("")
    setItem("")
  }

  return (
    <div>
      <h1>Add a New Todo</h1>
      <form onSubmit={handleSubmit}>
        <div className="p-8 text-black">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="p-8 text-black">
          <label htmlFor="category">Category:</label>
          <input
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
