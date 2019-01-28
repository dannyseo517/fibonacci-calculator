import React from 'react';
import { shallow } from 'enzyme';
import Main from 'Components/main';

describe('Main component', () => {
    it('should render initial layout', () => {
        const component = shallow(<Main />);
        expect(component.getElements()).toMatchSnapshot();
    });
});

