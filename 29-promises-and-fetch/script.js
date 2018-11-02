//Callback function
// click -> callback function
// setTimeout(sayHi, 1000)
// function sayHi(){
//   console.log('hi')
// }

// httpGet('https://pokeapi.co/api/v2/pokemon/', function(){
//   //does something with the API data
//   //let pokemonURL = //grab the pokemon/id url
//   httpGet(pokemonURL, function(){
//     //ok, now I have data on bulbasaur
//     httpGet(anotherURL, function(){
//       //do something stuff to manipulate the DOM
//     })
//   })
// })

//do something1
//do soemething 2
//do something3
//....


var p = new Promise(() => {})



// var p = new Promise((resolve) => {
// 	setTimeout(function(){
// 		resolve(2018)
// 	}, 5000)
// })
// p.then(() => {
//   console.log('the data is here!!!! Promise is resolved')
// })
//
//
document.addEventListener('DOMContentLoaded', function(){
  getAnimals()
})

function getAnimals(){
  fetch('https://animal-farm-api.herokuapp.com/animals')
  .then(response => response.json())
  .then(data => {
    //do something with jsonData
    //jsonData is an array
    data.forEach(animal => render(animal))
  })
}

function getContainer(){
  return document.querySelector('.container')
}

function render(animal){
  let string = `<li>${animal.name}</li>
  <img src=${animal.img}>`
  getContainer().innerHTML += string
}


// fetch('https://animal-farm-api.herokuapp.com/animals')
// .then(response => {
//   document.querySelector('.container').innerHTML = `status: ${response.status}`
// })











//
