import React, { Component } from 'react';
import '../App.css';
import TeamList from './TeamList'
import PokemonDetails from '../component/PokemonDetails'
import WildPokemonList from './WildPokemonList'

const URL = `https://pokeapi.co/api/v2/pokemon/`

class App extends Component {
  constructor(){
    super()
    this.state = {
      teamPokemon: [],
      allPokemon: [],
      currentPokemon: null
    }
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      this.setState({
        allPokemon: data.results
      })
    })
  }

  getFilteredPokemon(){
    let newArray = this.state.allPokemon.filter(pokemon => {
      return !this.state.teamPokemon.includes(pokemon)
    })
    //new array of filteredPokemon
    return newArray
  }

  addPokemonToTeam = (pokemon) => {
    console.log('adding pokemon', pokemon)
    if(this.state.teamPokemon.length < 6){
      this.setState({
        teamPokemon: [...this.state.teamPokemon, pokemon]
      })
    }
  }

  removePokemonFromTeam = (pokemon) => {
    console.log("removing pokemon", pokemon)
    let index = this.state.teamPokemon.findIndex(pokemon => pokemon.name === pokemon.name)
    let newArray = [...this.state.teamPokemon]
    newArray.splice(index, 1)
    this.setState({
      teamPokemon: newArray
    })
  }

  onSelectPokemon = (pokemon) => {
    let URL = pokemon.url
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      let stats = data.stats
      this.setState({
        currentPokemon: {
          pokemonName: pokemon.name,
          pokemonSprite: data.sprites.front_default,
          stats: stats
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <img alt="Pokemon" width="200" src="https://d33wubrfki0l68.cloudfront.net/42936b3e4d03c9b7c5927e3752a36cef7ff8bdf0/53627/images/pokemon.png"/>
        <h3>Team List:</h3>
        <TeamList pokemons={this.state.teamPokemon} removeFromTeam={this.removePokemonFromTeam} onClickPokemon={this.onSelectPokemon}/>
        <PokemonDetails pokemonToShow={this.state.currentPokemon}/>
        <h3>Wild Pokemon:</h3>
        <WildPokemonList pokemons={this.getFilteredPokemon()} addToTeam={this.addPokemonToTeam} onClickPokemon={this.onSelectPokemon}/>
      </div>
    );
  }
}

export default App;
