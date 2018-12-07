const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

const reducer = (oldState={count: 0}, action) => {
  switch(action.type){
    case INCREMENT:
      return {count: oldState.count + action.value}
    case DECREMENT:
      return {count: oldState.count - action.value}
    default:
      return oldState
  }
}

export default reducer
