import React from 'react';

const HogSearch = ({greased, onChangeFilter, sortBy, onChangeSortBy}) => {
  return (
    <div className="ui menu">
      <div className="header item">
        <label>Greased, and ONLY greased</label>
      </div>
      <div className="item">
        <input
          className="ui checkbox"
          type="checkbox"
          onChange={onChangeFilter}
        />
      </div>
      <div className="header item">
        <label>Sort By</label>
      </div>
      <div className="item">
        <select className="ui select" onChange={(event) => onChangeSortBy(event.target.value)}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  );
};

export default HogSearch;
