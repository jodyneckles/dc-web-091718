import React from 'react';
import { shallow } from 'enzyme';
import Band from './Band';

let mockProps = {
  name: "Pat the Bunny",
  id: 1,
  deleteBand: jest.fn()
};
let wrapper = shallow(<Band {...mockProps} />);

describe('Band', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('deletes band on click', () => {
    wrapper.find('button').simulate('click');
    expect(mockProps.deleteBand).toBeCalledWith(mockProps.id);
  });
})
