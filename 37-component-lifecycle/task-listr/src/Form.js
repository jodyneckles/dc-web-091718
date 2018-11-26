import React from 'react'

const Form = (props) => {
  return(
    <form onSubmit={props.onSubmit}>
      <input type="text" onChange={props.onChange} value={props.value}/>
      <input type="submit" />
    </form>
  )
}

export default Form
