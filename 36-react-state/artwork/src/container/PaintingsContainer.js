import React, {Component} from 'react'
import Painting from '../component/Painting'
import masterPaintingsList from '../data/paintings'
import Searchbar from '../component/Searchbar'
import PaintingDetails from '../component/PaintingDetails'

class PaintingsContainer extends Component{
  //put state here
  constructor(){
    super()
    this.state = {
      searchTerm: "",
      currentPainting: null
    }
  }

  onSearchChange = (event) => {
    event.persist()
    this.setState({
      searchTerm: event.target.value
    })
  }

  onSelectPainting = (paintingId) => {
    let painting = masterPaintingsList.find(painting => painting.id === paintingId)
    this.setState({
      currentPainting: painting
    })
  }

  render(){
    let filteredPaintings = masterPaintingsList.filter(painting => painting.title.includes(this.state.searchTerm))
    console.log(filteredPaintings)
    return (
      <div>
        <Searchbar searchValue={this.state.searchTerm} onSearching={this.onSearchChange}/>
        <PaintingDetails painting={this.state.currentPainting}/>
        {filteredPaintings.map(painting =>
          <Painting
            key={painting.id}
            painting={painting}
            onClickButton={this.onSelectPainting}
          />)}
      </div>
    )
  }
}

export default PaintingsContainer
