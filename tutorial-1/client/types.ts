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

//Pokemon Page

export interface PokemonSpecies {
  name: string
  url: string
}

export type PokedexSpecies = PokemonSpecies[]

//Game Page

export interface Game {
  category: string
  gameTitle: string
  img: string
}

export interface AddGame {
  addGame: boolean
}
