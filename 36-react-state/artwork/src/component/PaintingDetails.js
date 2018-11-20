import React from 'react'

//if painting is NOT null, return JSX, if it IS null, return null
const PaintingDetail = (props) => {
  return props.painting ? (
    <div className="ui card">
      <div>
        <img alt={props.painting.title} src={props.painting.image} />
      </div>
      <p>{`${props.painting.title} by ${props.painting.name}`}</p>
      <p>{`${props.painting.dimensions.height} x ${props.painting.dimensions.width}`}</p>
    </div>
  ) : null
}

export default PaintingDetail
