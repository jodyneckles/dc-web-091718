document.addEventListener("DOMContentLoaded", function(){
  getAllPokemon()
  addFormListener()
});

function addFormListener(){
  document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault()
    postPokemon()
  })
}

function postPokemon(){
  let url = `http://localhost:3000/pokemon`
  let name = document.querySelector('#name-input').value
  let sprite = document.querySelector('#sprite-input').value

  fetch(url, {
    method: "POST",
    headers: {
      "Content-type" : "application/json"
    },
    body: JSON.stringify({name: name, sprite: sprite})
  })
  .then(response => response.json())
  .then(data => {
    renderPokemon(data)
  })
}

function getPokemonContainer(){
    return document.querySelector('#pokemon-container')
}

function getAllPokemon(){
  fetch(`http://localhost:3000/pokemon`)
  .then(response => response.json())
  .then(data => {
    //data is an array
    data.forEach(pokemon => {renderPokemon(pokemon)})
  })
}

function renderPokemon(pokemon){
  let cardEl = document.createElement('div')
  let h2El = document.createElement('h2')
  let imgEl = document.createElement('img')
  cardEl.appendChild(h2El)
  cardEl.appendChild(imgEl)
  getPokemonContainer().appendChild(cardEl)

  h2El.innerText = pokemon.name
  imgEl.src = pokemon.sprite
  cardEl.className = "card"
  cardEl.id = `pokemon-${pokemon.id}`

  cardEl.addEventListener('click', deletePokemon)
}

function deletePokemon(event){
  let pokemonId = event.currentTarget.id.split('-')[1]
  fetch(`http://localhost:3000/pokemon/${pokemonId}`, {
    method: "DELETE"
  }).then(response => response.json())
  .then(data => {
    console.log(data)
    document.querySelector(`#pokemon-${pokemonId}`).remove()
  })
}

//Hot to make a PATCH request
/*
fetch('http://localhost:3000/pokemon/1', {
  method: "PATCH",
  headers: {
    "Content-type" : "application/json"
  },
  body: JSON.stringify({name: "Ann"})
})
.then(response => response.json())
.then(data => {
})*/

//optimistic rendering
// function deletePokemon(event){
//   let pokemonId = event.currentTarget.id.split('-')[1]
//   fetch(`http://localhost:3000/pokemon/${pokemonId}`, {
//     method: "DELETE"
//   })
//   document.querySelector(`#pokemon-${pokemonId}`).remove()
// }

/*
<div class="card" id="pokemon-1">
  <h2>bulbasaur</h2>
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">
</div>
*/
