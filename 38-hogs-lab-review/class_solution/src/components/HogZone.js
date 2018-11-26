import React from 'react';
import Hog from './Hog';

const HogZone = (props) => {
  return (
    <div className="ui grid container cards">
      {props.hogs.map(hog => <Hog key={hog.name} hog={hog}/>)}
    </div>);
}
export default HogZone;
