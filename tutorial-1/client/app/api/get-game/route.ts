import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import { Game } from "@/types"

const dataFilePath = path.join(process.cwd(), "data", "game.json")

export async function GET() {
  try {
    const fileData = fs.readFileSync(dataFilePath, "utf-8")
    const todos: Game[] = JSON.parse(fileData)

    return NextResponse.json(todos)
  } catch (error) {
    console.error("Error reading game", error)
    return new NextResponse("Failed to read game", { status: 500 })
  }
}
