import React from 'react';
import { shallow } from 'enzyme';
import Button from 'Common/button';

describe('Common button', () => {
    it('should render initial layout', () => {
        const callback = (): any => {
            return null;
        };
        const component = shallow(<Button buttonText='=' callback={callback}/>);
        expect(component.getElements()).toMatchSnapshot();
    });

    it('should call handleButtonClick on button click', () => {
        const callback = jest.fn();
        const component = shallow(<Button buttonText='=' callback={callback}/>);
        component.find('button').simulate('click');
        expect(callback.mock.calls.length).toEqual(1);
    });
});

