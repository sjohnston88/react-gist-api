import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('Component/DefaultMessage', () => {
  const setup = () => shallow(<App 
    location={{search:""}} 
    match={{params: {username: "defunkt"}, isExact: true, path: "/defunkt", url: "/defunkt"}} 
  />);

  it('renders correctly', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot('default');
  });

});
