import React from "react";
import {connect} from "react-redux"
import PaintingListItem from "./PaintingListItem";

const PaintingsList = props => (
  <div className="ui container">
    <div className="ui celled selection list">
      {props.paintings.map(painting => (
        <PaintingListItem
          key={painting.id}
          painting={painting}
        />
      ))}
    </div>
  </div>
);
const mapStateToProps = state => {
  return{
    paintings: state.paintings.filter(
      p =>
        p.title.toLowerCase().includes(state.searchText.toLowerCase()) ||
        p.artist.name
          .toLowerCase()
          .includes(state.searchText.toLowerCase())
    )
  }
}
export default connect(mapStateToProps)(PaintingsList);
