import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SiteRoutes from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('Component/SiteRoutes', () => {
  const setup = () => shallow(<SiteRoutes />);

  it('renders correctly', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot('default');
  });
  
});
