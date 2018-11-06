const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

// YOUR CODE HERE

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})


function toyUrl(){
  return `http://localhost:3000/toys`
}

function getToys(){
  fetch(toyUrl())
  .then(resp => resp.json())
  .then(toys => render(toys))
}

function toyContainer(){
  return document.querySelector('#toy-collection')
}

function render(toys){
  toys.map(toy => toyCard(toy))
}

function toyCard(toy){

  let card = document.createElement('div')
  card.className = "card"
  card.id = toy.id

  let name = document.createElement('h2')
  name.innerText = `${toy.name}`

  let img = document.createElement('img')
  img.className = "toy-avatar"
  img.src = `${toy.image}`

  let p = document.createElement('p')
  p.innerText = `${toy.likes} Likes`

  let button = document.createElement('button')
  button.className = "like-btn"
  button.innerText = "Like <3"

  button.addEventListener('click', (e)=>{
    let toyId = e.target.parentElement.id
    findLikes(toyId)
  })

  card.appendChild(name)
  card.appendChild(img)
  card.appendChild(p)
  card.appendChild(button)

  toyContainer().appendChild(card)
}

function postToy(formData){
  let data = {
    name: formData[0].value,
    image: formData[1].value,
    likes:0
  }
  fetch(toyUrl(),{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(data)
  }).then(resp => resp.json())
  .then(data => toyCard(data))
}

function findLikes(toyId){
  let card =  document.getElementById(`${toyId}`)
  let likes = parseInt(card.children[2].innerText)
  likes++
  patchLikes(toyId,likes)

  card.children[2].innerText = `${likes} Likes`
}

function patchLikes(toyId, likes){
  fetch(toyUrl()+`/${toyId}`,{
    method:"PATCH",
    headers:{"Content-Type": "application/json"},
    body:JSON.stringify({likes: likes})
  }).then(resp => resp.json())
  .then(data => console.log(data))
}

document.addEventListener('DOMContentLoaded', ()=>{
  getToys()
  toyForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    let formData = document.querySelectorAll('.input-text')
    postToy(formData)
  })
})
