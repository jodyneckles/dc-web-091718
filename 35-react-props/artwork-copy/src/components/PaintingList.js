import React, {Component} from 'react'
import PaintingCard from './PaintingCard'
import paintingsArray from '../data/paintings'

// console.log(paintingsArray)


class PaintingList extends Component {
  render(){
    return(
      <div>
        {paintingsArray.map(painting => <PaintingCard key={painting.id} painting={painting}/>)}
      </div>
    )
  }
}

export default PaintingList
