import { NextApiRequest, NextApiResponse } from "next"
import type { Todo } from "@/types"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getTodos(req, res)
    default:
      res.status(405).end()
      break
  }
}

const todos: Todo[] = [
  {
    toDoId: "1",
    toDoTitle: "Go to gym",
    toDoCatagory: "Health",
    toDoCompleted: true,
  },

  {
    toDoId: "2",
    toDoTitle: "Make dinner",
    toDoCatagory: "Health",
    toDoCompleted: false,
  },

  {
    toDoId: "3",
    toDoTitle: "Study for exam",
    toDoCatagory: "Education",
    toDoCompleted: false,
  },
  {
    toDoId: "4",
    toDoTitle: "Testing",
    toDoCatagory: "Test",
    toDoCompleted: true,
  },
  {
    toDoId: "5",
    toDoTitle: "Feed the cat",
    toDoCatagory: "Household",
    toDoCompleted: false,
  },
]

async function getTodos(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).send(todos)
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" })
  }
}
