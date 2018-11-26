import React, {Component} from 'react'

//props = {comment: {}}
const Comment = (props) => {
  console.log(props)
  return(
    <div className="comment">
    {`${props.c.commentContent} written by ${props.c.author}`}
    </div>
  )
}

// class Comment extends Component {
//   render(){
//     return(
//       <div className="comment">
//       {`${this.props.c.commentContent} written by ${this.props.c.author}`}
//       </div>
//     )
//   }
// }

export default Comment
