import React from 'react'
import Comment from './Comment'

const commentData = [
  {id: 1, author: "Jake", commentContent: "omg i wasn't prepared"},
  {id: 2, author: "Melanie", commentContent: "derp"},
  {id: 3, author: "Ann", commentContent: "lol"},
]

const CommentBox = () => {
  // console.log(commentData)
  return (
    <div className="comment-box">CommentBox
      {commentData.map( commentObj => <Comment key={commentObj.id} c={commentObj}/>)}
    </div>
  )
}

// class CommentBox extends React.Component {
//   render(){
//     return (
//       <div className="comment-box">CommentBox</div>
//     )
//   }
// }

export default CommentBox
