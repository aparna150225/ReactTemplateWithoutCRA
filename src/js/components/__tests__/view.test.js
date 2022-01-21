import React from 'react';
import { shallow } from 'enzyme';
import StyledP from '../view';

describe('StyledP component', () => {
  it('Renders StyledP snapshot', () => {
    const wrapper = shallow(<StyledP />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
