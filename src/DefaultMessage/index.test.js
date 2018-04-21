import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DefaultMessage from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('Component/DefaultMessage', () => {
  const setup = () => shallow(<DefaultMessage />);

  it('renders correctly', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot('default');
  });

});
