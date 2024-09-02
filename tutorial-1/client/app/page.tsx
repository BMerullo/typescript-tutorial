"use client"

import type { Todo } from "@/types"
import type { Family } from "@/types"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [family, setFamily] = useState<Family[]>([])
  useEffect(() => {
    async function fetchTodos() {
      const response = await axios.get(`/api/todo`)
      setTodos(response.data as Todo[])
    }
    fetchTodos()

    async function fetchFamily() {
      const response = await axios.get(`/api/family`)
      setFamily(response.data as Family[])
    }
    fetchFamily()
  }, [])
  console.log(todos, "HERE ARE MY TODOS")
  return (
    <div className="flex flex-col w-full justify-center items-center min-h-screen">
      List Page
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
      Family Page
      <div className="flex flex-col w-10/12 bg-gray-900 p-4 rounded-md shadow2xl my-4">
        <div className="w-full flex justify-between px-4 opacity-50 mb-2">
          <div>Name</div>
          <div>Age</div>
          <div>Gender</div>
        </div>
        {family.map((fam, idx) => (
          <>
            <div
              className={`${
                idx === -1
                  ? "rounded-t-md"
                  : family.length === idx
                  ? "rounded-b-md"
                  : ""
              }bg-gray-800 shadow-md hover:bg-gray-700 cursor-pointer flex w-full justify-between p-4`}
            >
              <div>{fam.familyName}</div>
              <div>{fam.familyAge}</div>
              <div>{fam.familyGender}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
