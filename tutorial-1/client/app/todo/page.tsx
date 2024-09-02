"use client"
import React from "react"
import type { Todo } from "@/types"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import styles from "../todo/todo.module.scss"

const todo = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const router = useRouter()

  useEffect(() => {
    async function fetchTodos() {
      const response = await axios.get(`/api/todo`)
      setTodos(response.data as Todo[])
    }
    fetchTodos()
  }, [])

  const navigateToHome = () => {
    router.push("/")
  }

  return (
    <div className="flex flex-col w-full justify-center items-center min-h-screen">
      <h1>Todos</h1>
      <div className="flex flex-col w-10/12 bg-gray-900 p-4 rounded-md shadow-2xl my-4">
        <div className="w-full flex justify-between px-4 opacity-50 mb-2">
          <div>Title</div>
          <div>Catagory</div>
          <div>Status</div>
        </div>
        {todos.map((todo, idx) => (
          <>
            <div
              className={`${
                idx === 0
                  ? "rounded-t-md"
                  : todos.length - 1 === idx
                  ? "rounded-b-md"
                  : ""
              }
              bg-gray-800 shadow-md hover:bg-gray-700 cursor-pointer flex w-full justify-between p-4 `}
            >
              <div>{todo.toDoTitle}</div>
              <div>{todo.toDoCatagory}</div>
              <div>{todo.toDoCompleted ? "Completed" : "NotCompleted"}</div>
            </div>
          </>
        ))}
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={navigateToHome}>
          Home
        </button>
      </div>
    </div>
  )
}

export default todo
