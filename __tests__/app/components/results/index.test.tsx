import React from 'react';
import ReactDOM from 'react-dom';
import FibonacciResult from 'Components/results';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import fibonacciReducer from 'Reducers/fibonacci';
import { REQUEST_FIBONACCI } from 'Constants/action-types';
import { Map } from 'immutable';

const mockStore = configureStore([thunk]);
const store = mockStore();

describe('Fibonacci results', () => {
    it('should render initial layout correctly', () => {
        const component = renderer.create(<Provider store={store}><FibonacciResult /></Provider>).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('should render fibonacci results with inclusive', () => {
        const fibonacci = fibonacciReducer(Map(), { type: REQUEST_FIBONACCI, data: { value: 10, mode: 'inclusive' } });
        const newStore = mockStore({ fibonacciReducer: fibonacci });
        jest.spyOn(Date, 'now').mockImplementation(() => 1487076708000);
        const component = shallow(<Provider store={newStore}><FibonacciResult /></Provider>);
        component.setProps({ 'test': true });
        component.update();
        expect(component).toMatchSnapshot();
    });

    it('should render fibonacci results with recursion', () => {
        const fibonacci = fibonacciReducer(Map(), { type: REQUEST_FIBONACCI, data: { value: 10, mode: 'recursion' } });
        const newStore = mockStore({ fibonacciReducer: fibonacci });
        jest.spyOn(Date, 'now').mockImplementation(() => 1487076708000);
        const component = shallow(<Provider store={newStore}><FibonacciResult /></Provider>);
        component.setProps({ 'test': true });
        component.update();
        expect(component).toMatchSnapshot();
    });

    it('should call componentDidUpdate', () => {
        jest.useFakeTimers();
        const node = document.createElement('div');
        ReactDOM.render(<Provider store={store}><FibonacciResult /></Provider>, node);
        const fibonacci = fibonacciReducer(Map(), { type: REQUEST_FIBONACCI, data: { value: 10, mode: 'inclusive' } });
        const newStore = mockStore({ fibonacciReducer: fibonacci });
        ReactDOM.render(<Provider store={newStore}><FibonacciResult /></Provider>, node);
        jest.runAllTimers();
        // setInterval is inside componendDidMount
        expect(setInterval).toHaveBeenCalled();
    });

    it('should do nothing with default reducer', () => {
        const fibonacci = fibonacciReducer(Map(), { type: 'none' });
        const newStore = mockStore({ fibonacciReducer: fibonacci });
        const component = shallow(<Provider store={newStore}><FibonacciResult /></Provider>);
        expect(component).toMatchSnapshot();
    });
});