"use client"

import React, { useState } from "react"
import TodoForm from "../components/TodoForm"
import TodoList from "../components/TodoList"
import { TodoProvider } from "../context/TodoContext"

const todo = () => {
  return (
    <TodoProvider>
      <TodoForm />
      <TodoList />
    </TodoProvider>
  )
}

export default todo
