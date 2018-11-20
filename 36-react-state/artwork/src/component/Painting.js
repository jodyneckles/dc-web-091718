import React from 'react'

const Painting = ({onClickButton, painting:{id, title, image, artist: {name}, dimensions: {height, width}}}) => {
  return (
    <div className="ui card">
      <p>{`${title} by ${name}`}</p>
      <button onClick={() => {onClickButton(id)}}>Show Details</button>
    </div>
  )
}

export default Painting
