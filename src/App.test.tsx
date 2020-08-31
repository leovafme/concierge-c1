import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders with Timer', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Timer').length).toBe(1);
});
