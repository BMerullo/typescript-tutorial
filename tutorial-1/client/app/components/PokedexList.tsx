import React from "react"
import { PokedexSpecies } from "../../types"

interface PokedexListProps {
  pokedexList: PokedexSpecies
}

const PokedexList: React.FC<PokedexListProps> = ({ pokedexList }) => {
  return (
    <>
      <section>
        {pokedexList.map((pokemon, index) => (
          <div>
            <h3 key={index}>{pokemon.name}</h3>
          </div>
        ))}
      </section>
    </>
  )
}

export default PokedexList
