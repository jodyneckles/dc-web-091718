import React from 'react'

const Header = (props) => {
  // console.log(props)
  return (
    <div className={`ui inverted ${props.color} menu navbar`}>
      <a href="#" className="item">
        <h2 className="ui header">
          <i className="paint brush icon"></i>
          <div className="content">{props.title}</div>
          <div className="sub header">{props.tagline}</div>
        </h2>
      </a>
    </div>
  )

}

export default Header
