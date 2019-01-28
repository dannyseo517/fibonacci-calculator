import { REQUEST_FIBONACCI } from 'Constants/action-types';
import { requestFibonacci } from 'Actions/index';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);
const store = mockStore();

describe('Actions' , () => {
    it('requestFibonacci dispatches the correct action and payload', () => {
        const expectedActions = [{
            type: REQUEST_FIBONACCI,
            data: {
                value: 10,
                mode: 'inclusive',
            },
        }];

        store.dispatch(requestFibonacci(10, 'inclusive'));
        expect(store.getActions()).toEqual(expectedActions);
    });
});