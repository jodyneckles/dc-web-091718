document.addEventListener('DOMContentLoaded', function(){
  getCats()
})

function getCats(){
  fetch(`http://localhost:3000/cats`)
  .then(res => res.json())
  .then(data => {
  	data.forEach(cat => {
      createCat(cat)
    })
  })
}

function createCat(cat){
  let catInstance = new Cat(cat.id, cat.name, cat.color, cat.breed, cat.image, cat.quote, cat.floof)
  let catDiv = document.createElement('div')
  catDiv.appendChild(catInstance.render())
  document.querySelector('#cats').appendChild(catDiv)
  cat.hobbies.forEach(hobby => {
    // debugger
    let hobbyInstance = new Hobby(hobby.name, hobby.description)
    catDiv.querySelector('ul').appendChild(hobbyInstance.render())
  })
}
