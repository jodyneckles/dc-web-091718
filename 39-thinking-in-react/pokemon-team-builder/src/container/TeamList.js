import React from 'react'
import Card from '../component/Card'

const TeamList = (props) => {
  //props.pokemons is an array
  //props.removeFromTeam is a function
  return (
    <div>
      {props.pokemons.map(pokemon => <Card
        key={pokemon.name}
        pokemon={pokemon}
        onDoubleClickCard={props.removeFromTeam}
        onClickPokemon={props.onClickPokemon}
      />)}
    </div>
  )
}

export default TeamList
