import { REQUEST_FIBONACCI } from 'Constants/action-types';
import { Map } from 'immutable';
import { fibonacci } from 'Helpers/fibonacci';

export default (state = Map(), action: any) => {
    switch (action.type) {
        case REQUEST_FIBONACCI:
            const inputVal = action.data.value;
            const fibonacciArr = fibonacci(inputVal);
            return state.set('inputValue', inputVal)
                .set('fibonacciArr', fibonacciArr);
        default:
            return state;
    }
};
