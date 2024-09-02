import { NextApiRequest, NextApiResponse } from "next"
import type { Family } from "@/types"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getFamily(req, res)
    default:
      res.status(405).end()
      break
  }
}

const family: Family[] = [
  {
    familyId: "1",
    familyName: "Bob",
    familyAge: 38,
    familyGender: "Male",
  },
  {
    familyId: "2",
    familyName: "Amanda",
    familyAge: 36,
    familyGender: "Female",
  },
  {
    familyId: "3",
    familyName: "Jimmy",
    familyAge: 9,
    familyGender: "Male",
  },
  {
    familyId: "4",
    familyName: "Charlie",
    familyAge: 4,
    familyGender: "Male",
  },
]

async function getFamily(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).send(family)
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" })
  }
}
