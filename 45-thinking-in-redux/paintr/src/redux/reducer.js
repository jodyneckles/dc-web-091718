import paintingsData from "../paintings.json";
import {combineReducers} from 'redux'

const searchTextReducer = (oldState="", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return action.searchText
    default:
      return oldState
  }
}

const paintingsReducer = (oldState=paintingsData.paintings, action) => {
  switch (action.type) {
    case "VOTE_FOR_PAINTING":
      return oldState.map(painting => {
        if(painting.id === action.paintingId){
          return {
            ...painting,
            votes: painting.votes + 1
          }
        }else{
          return painting
        }
      })
    case "UPDATE_PAINTING_INFO":
      return oldState.map(painting => {
        if(painting.id === action.info.paintingId){
          return {
            ...painting,
            title: action.info.title,
            artist: {
              ...painting.artist,
              name: action.info.name,
              birthday: action.info.birthday,
              deathday: action.info.deathday
            }
          }
        }
        return painting
      })
    default:
      return oldState
  }
}

const rootReducer = combineReducers(
  {
    paintings: paintingsReducer,
    searchText: searchTextReducer
  }
)

// const rootReducer = (oldState=initialState, action) => {
//   switch (action.type) {
//     case "CHANGE_SEARCH_TEXT":
//       return {
//         ...oldState,
//         searchText: action.searchText
//       }
//     default:
//       return oldState
//   }
// }

export default rootReducer
