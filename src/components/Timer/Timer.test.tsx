import React from 'react';
import { shallow, render } from 'enzyme';
import Timer from './index';

it('defined text hours', () => {
    const wrapper = shallow(<Timer />);
    expect(wrapper.find('.timer--container-time').length).toEqual(1);
});

it('defined buttons', () => {
    const wrapper = shallow(<Timer />);
    expect(wrapper.find('.timer--container-actions Button').length).toEqual(3);
});

it('timer init text', () => {
    const wrapper = render(<Timer />);
    expect(wrapper.find('.timer--container-tim').first().text()).toEqual("");
});

