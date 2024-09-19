import React from "react"
import FullScreenHero from "../components/Full-screen-hero/full-screen-hero"
import PokedexList from "../components/PokedexList"

const pokedex = async () => {
  const heroImg =
    "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2016/09/20/1331818966444_2/pok%C3%A9mon-super-mystery-dungeon"

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
