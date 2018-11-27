import React from 'react'
import Card from '../component/Card'

const WildPokemonList = (props) => {
  //props.addToTeam is a function obj
  return (
    <div>
      {props.pokemons.map(pokemon => <Card
        key={pokemon.name}
        pokemon={pokemon}
        onDoubleClickCard={props.addToTeam}
        onClickPokemon={props.onClickPokemon}
      />)}
    </div>
  )
}

export default WildPokemonList
