import React from 'react'

const Searchbar = (props) => {
  //props.onSearching is a function object 
  console.log(props)
  return (
    <input value={props.searchValue} onChange={props.onSearching}/>
  )
}

export default Searchbar
