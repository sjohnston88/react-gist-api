import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MainContent from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('Component/MainContent', () => {
  const setup = () => shallow(<MainContent invalidDate={true} userName="defunkt" dataFound={true} />);

  it('renders correctly', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot('default');
  });

  it('renders a error message if the date is invalid', () => {
    const wrapper = setup();
    wrapper.setState({ invalidDate: true });
    expect(wrapper).toMatchSnapshot('invalidDate');
  });

  it('it renders the default message', () => {
    const wrapper = setup();
    wrapper.setState({ userName: 'Defunkt' });
    expect(wrapper).toMatchSnapshot('defaultMessage');
  });

  it('it renders the Gist if data is found', () => {
    const wrapper = setup();
    wrapper.setState({ dataFound: true });
    expect(wrapper).toMatchSnapshot('dataFound');
  });
  
});
