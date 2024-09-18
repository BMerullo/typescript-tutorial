import React from "react"
import FullScreenHero from "../components/Full-screen-hero/full-screen-hero"
import PokedexList from "../components/PokedexList"

const pokedex = async () => {
  const heroImg =
    "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/06/the-15-best-starting-pokemon-of-the-series.jpg"

  const pokedexResponse = await fetch(
    "https://pokeapi.co/api/v2/pokemon-species"
  )
  const pokedexData = await pokedexResponse.json()

  const pokedexList = pokedexData.results
  console.log(pokedexList, "This is the List <--")

  return (
    <main>
      <FullScreenHero heroImg={heroImg} />
      <PokedexList pokedexList={pokedexList} />
    </main>
  )
}

export default pokedex
