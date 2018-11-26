import React from 'react'

//props = {painting: {} }
const PaintingCard = (props) => {
  // let {painting} = props
  //let {image, title, artist, date, dimensions:{height, width}} = props

  // let {image, title, artist, date, dimensions:{height, width}} = props.painting

  let {painting: {image, title, date, artist, dimensions:{height, width}}} = props
  return(
    <div className="ui card">
      <img src={image}/>
      <p>{`${title} by ${artist.name}`}</p>
      <p>{date}</p>
      <p>{`${height} x ${width}`}</p>
    </div>
  )
}

export default PaintingCard
