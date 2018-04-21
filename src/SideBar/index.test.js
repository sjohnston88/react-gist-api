import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SideBar from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('Component/SideBar', () => {
  const setup = () => shallow(<SideBar />);

  it('renders correctly', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot('default');
  });
  
});
