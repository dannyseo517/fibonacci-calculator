import React from 'react';
import { shallow } from 'enzyme';
import Input from 'Common/input';

describe('Common input', () => {
    it('should render initial layout', () => {
        const callback = (): any => {
            return null;
        };
        const component = shallow(<Input placeholder='placeholder test' callback={callback} autofocus={true} />);
        expect(component.getElements()).toMatchSnapshot();
    });

    it('should respond to input change and update state', () => {
        const callback = jest.fn();
        const component = shallow(<Input placeholder='placeholder test' callback={callback} autofocus={true} />);
        component.find('input').simulate('change', { target: { value: '10' } });
        expect(component.state('value')).toEqual('10');
    });
});

