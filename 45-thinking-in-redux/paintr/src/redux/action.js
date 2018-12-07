
function updatePaintingInfo(info){
  return {type:"UPDATE_PAINTING_INFO", info}
}

function voteForPainting(paintingId){
  return {type: "VOTE_FOR_PAINTING", paintingId}
}

function changeSearchText(searchText){
  return {type: "CHANGE_SEARCH_TEXT", searchText}
}

export {updatePaintingInfo, voteForPainting, changeSearchText}
