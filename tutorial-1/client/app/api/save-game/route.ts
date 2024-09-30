import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import { Game } from "@/types"

const dataFilePath = path.join(process.cwd(), "data", "game.json")

export async function POST(request: Request) {
  const newGame: Game = await request.json()
  let game: Game[] = []
  try {
    const fileData = fs.readFileSync(dataFilePath, "utf-8")
    game = JSON.parse(fileData)
  } catch (error) {
    console.log("Error reading file", error)
  }

  game.push(newGame)

  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(game, null, 2))
    return NextResponse.json({ message: "Game saved successfully" })
  } catch (error) {
    console.log("Error writing to file", error)
    return NextResponse.json(
      { message: "Failed to save Game" },
      { status: 500 }
    )
  }
}
