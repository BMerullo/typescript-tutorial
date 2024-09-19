import React from "react"
import { PokedexSpecies } from "../../types"

interface PokedexListProps {
  pokedexList: PokedexSpecies
}

const PokedexList: React.FC<PokedexListProps> = ({ pokedexList }) => {
  return (
    <>
      <section className="p-10  md:p-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {pokedexList.map((pokemon, index) => (
          <button className="m-2 bg-blue-800 hover:bg-yellow-500  md:text-xl p-8  rounded-lg">
            <h3 key={index}>{pokemon.name}</h3>
          </button>
        ))}
      </section>
    </>
  )
}

export default PokedexList
