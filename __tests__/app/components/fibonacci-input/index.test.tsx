import React from 'react';
import { mount } from 'enzyme';
import FibonacciInput from 'Components/fibonacci-input';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

const mockStore = configureStore([thunk]);
const store = mockStore();

describe('Fibonacci Input', () => {
    it('should render intial layout correctly', () => {
        const component = renderer.create(<Provider store={store}><FibonacciInput /></Provider>).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('should change mode when clicking recursion', () => {
        const component = mount(<Provider store={store}><FibonacciInput /></Provider>);
        component.find(`span[id='recursion']`).simulate('click');
        component.update();
        expect(component.find(`span[id='recursion']`).hasClass('active')).toEqual(true);
    });

    it('should change mode when clicking linear', () => {
        const component = mount(<Provider store={store}><FibonacciInput /></Provider>);
        component.find(`span[id='linear']`).simulate('click');
        component.update();
        expect(component.find(`span[id='linear']`).hasClass('active')).toEqual(true);
    });

    it('should call button click handler function when clicked and shows error message', () => {
        const component = mount(<Provider store={store}><FibonacciInput /></Provider>);
        component.find('button').simulate('click');
        component.update();
        expect(component.find(`div[className='error-msg']`)).toHaveLength(1);
    });

    it('should update input when value has been entered', () => {
        const component = mount(<Provider store={store}><FibonacciInput /></Provider>);
        component.find('input').simulate('change', { target: { value: '10' } } );
        component.update();
        expect(component.find('input').prop('value')).toEqual('10');
    });

    it('should dispatch requestFibonacci on button click with input value', () => {
        const component = mount(<Provider store={store}><FibonacciInput /></Provider>);
        component.find('input').simulate('change', { target: { value: '10' } } );
        component.find('button').simulate('click');
        const expectedActions = [{
            type: 'REQUEST_FIBONACCI',
            data: { value: 10, mode: 'linear' },
        }];
        expect(store.getActions()).toEqual(expectedActions);
    });
});