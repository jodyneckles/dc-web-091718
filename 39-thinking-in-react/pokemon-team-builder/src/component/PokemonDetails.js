import React from 'react'

const PokemonDetails = ({pokemonToShow}) => {
  console.log(pokemonToShow)
  return pokemonToShow ? (
    <div className="card details">
      <div>
        <div className="row">{pokemonToShow.pokemonName}</div>
        <div className="row">
          <div><img alt="" src={pokemonToShow.pokemonSprite} /></div>
          {pokemonToShow.stats.map((stat, index) => <div
            className="block"
            key={index}
            >{`${stat.stat.name}: ${stat.base_stat}`}
            </div>)}
        </div>
      </div>
    </div>
  ) : null
}

export default PokemonDetails
