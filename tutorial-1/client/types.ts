export type Todo = {
  toDoId: string
  toDoTitle: string
  toDoCatagory: string
  toDoCompleted: boolean
}

export type Family = {
  familyId: string
  familyName: string
  familyAge: number
  familyGender: string
}

export interface PokemonSpecies {
  name: string
  url: string
}

export type PokedexSpecies = PokemonSpecies[]
