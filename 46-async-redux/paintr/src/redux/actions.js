// action creators
const URL = 'http://localhost:3000/paintings'

function changeSearchText(value) {
  return { type: "CHANGE_SEARCH_TEXT", value: value };
}

function increasedVotes(paintingId) {
  return { type: "INCREASE_VOTES", paintingId };
}

function increasingVotes(paintingId){
  return (dispatch, getState) => {
    let oldVotes = getState().paintings.find(p => p.id === paintingId).votes
    fetch(`${URL}/${paintingId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        votes: oldVotes + 1
      })
    })
    .then(res => res.json())
    .then(data => {
      dispatch(increasedVotes(paintingId))
    })
  }
}

function updatedPainting(painting) {
  return {
    type: "UPDATE_PAINTING",
    payload:
    { title: painting.title,
      name: painting.artist.name,
      birthday: painting.artist.birthday,
      deathday: painting.artist.deathday,
      id: painting.id
    }
  }
}

function updatingPainting(info){
  return (dispatch) => {
    fetch(`${URL}/${info.paintingId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        title: info.title,
        artist: {
          name: info.name,
          birthday: info.birthday,
          deathday: info.deathday
        }
      })
    })
    .then(res => res.json())
    .then(painting => {
      dispatch(updatedPainting(painting))
    })
  }
}

function fetchedPaintings(paintings){
  return {type: "FETCHED_PAINTINGS", paintings}
}

function loadingPaintings(){
  return {type: "LOADING_PAINTINGS"}
}

//goal: on load of the app, dispatch fetchingPaintings(),
//this action will fetch async, and then dispatch another action fetchedPaintings()
function fetchingPaintings(){
  return (dispatch) => {
    dispatch(loadingPaintings())
    fetch(URL)
    .then(res => res.json())
    .then(paintings => {
      dispatch(fetchedPaintings(paintings))
    })
  }
}
//problems: (1) dispatch not defined inside the function
//(2) actionCreators, must return {}, we should let actionCreators return function

export { changeSearchText, increasingVotes, updatingPainting, fetchedPaintings, fetchingPaintings };
