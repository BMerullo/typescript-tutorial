import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import { Todo } from "@/app/types/Todo"

const dataFilePath = path.join(process.cwd(), "data", "todos.json")

export async function POST(request: Request) {
  const newTodo: Todo = await request.json()

  let todos: Todo[] = []
  try {
    const fileData = fs.readFileSync(dataFilePath, "utf-8")
    todos = JSON.parse(fileData)
  } catch (error) {
    console.log("Error reading file", error)
  }

  todos.push(newTodo)

  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(todos, null, 2))
    return NextResponse.json({ message: "Todo saved successfully" })
  } catch (error) {
    console.log("Error writing to file", error)
    return NextResponse.json(
      { message: "Failed to save todo" },
      { status: 500 }
    )
  }
}
