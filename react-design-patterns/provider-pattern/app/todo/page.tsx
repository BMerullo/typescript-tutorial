"use client"

import React, { useState } from "react"
import TodoForm from "../components/TodoForm"
import { TodoProvider } from "../context/TodoContext"

const todo = () => {
  return (
    <TodoProvider>
      <TodoForm />
    </TodoProvider>
  )
}

export default todo
