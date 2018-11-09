class Hobby{
  constructor(name, description){
    this.name = name
    this.description = description
  }

  render(){
    let li = document.createElement('li')
    li.innerHTML = this.name
    return li
  }
}
