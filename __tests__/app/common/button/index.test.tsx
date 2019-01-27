import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Button from 'Common/button';

it('should render initial layout', () => {
    const callback = (): any => {
        return null;
    };
    const component = shallow(<Button buttonText='=' callback={callback}/>);
    expect(component.getElements()).toMatchSnapshot();
});
