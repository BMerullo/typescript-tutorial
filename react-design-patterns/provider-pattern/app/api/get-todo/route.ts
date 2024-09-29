import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import { Todo } from "../../types/Todo"

const dataFilePath = path.join(process.cwd(), "data", "todos.json")

export async function GET() {
  try {
    const fileData = fs.readFileSync(dataFilePath, "utf-8")
    const todos: Todo[] = JSON.parse(fileData)

    return NextResponse.json(todos)
  } catch (error) {
    console.error("Error reading todos", error)
    return new NextResponse("Failed to read todos", { status: 500 })
  }
}
