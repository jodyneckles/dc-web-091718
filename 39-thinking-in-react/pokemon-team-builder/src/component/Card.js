import React from 'react'

const Card = (props) => {
  //props.addToTeam is a function object
  //props.onDoubleClickCard
  // console.log(props)
  return (
    <div className="pokemon card"
    onDoubleClick={() => props.onDoubleClickCard(props.pokemon)}
    onClick={() => props.onClickPokemon(props.pokemon)}
    >{props.pokemon.name}</div>
  )
}

export default Card
