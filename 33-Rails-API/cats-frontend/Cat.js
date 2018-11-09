class Cat{
  constructor(id, name, color, breed, image, quote, floof){
    this.id = id
    this.name = name
    this.color = color
    this.breed = breed
    this.image=image
    this.quote = quote
    this.floof = floof
  }

  render(){
    let div = document.createElement('div')
    div.innerHTML = `<div class='card'>
      <h2>${this.name}</h2>
      <img src=${this.image}>
      <h4>"${this.quote}"</h4>
      <p>Color: ${this.color}</p>
      <p>Breed: ${this.breed}</p>
      <p>Flooffiness: ${this.floof}</p>
      <ul>Hobbies:</ul>
      </div>`
    return div
  }
}
