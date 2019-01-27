import { REQUEST_FIBONACCI } from 'Constants/action-types';
import { Map } from 'immutable';
import { fibonacci, fibonacciRecursion } from 'Helpers/fibonacci';

export default (state = Map(), action: any) => {
    switch (action.type) {
        case REQUEST_FIBONACCI:
            const { value, mode } = action.data;
            const fibonacciArr = mode === 'linear' ? fibonacci(value) : fibonacciRecursion(value);
            return state.set('inputValue', value)
                .set('fibonacciArr', fibonacciArr);
        default:
            return state;
    }
};
