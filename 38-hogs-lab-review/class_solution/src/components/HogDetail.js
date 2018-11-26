import React from 'react';

const HogDetail = (props) => {
  let specialty = props.hog.specialty
  let weight = props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
  let level = props.hog['highest medal achieved']

  return (
    <div className="description">
    <p>Specialty: {specialty}</p>
    <p>Weight: {weight}</p>
    <p>Highest Medal Achieved: {level}</p>
    </div>
  )
}

export default HogDetail;
