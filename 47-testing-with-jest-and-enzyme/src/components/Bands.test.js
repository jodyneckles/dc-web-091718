import React from 'react';
import { shallow } from 'enzyme';
import Bands from './Bands';
import Band from './Band';

describe('Bands', () => {
  it('renders props.bands as Band compents', () => {
    let mockProps = {
      bands: [
        { id: 1, name: "Pat the Bunny" },
        { id: 2, name: "Ranshackle Glory" }
      ]
    };

    let wrapper = shallow(<Bands {...mockProps} />);
    expect(wrapper.find(Band).length).toBe(mockProps.bands.length);
  });
});
