import { REQUEST_FIBONACCI } from 'Constants/action-types';
import { Map } from 'immutable';
import { fibonacci } from 'Helpers/fibonacci';

export default (state = Map(), action: any) => {
    switch (action.type) {
        case REQUEST_FIBONACCI:
            const inputVal = action.data.value;
            const t0 = performance.now();
            const fibonacciArr = fibonacci(inputVal);
            const t1 = performance.now();
            const duration = t1 - t0;
            return state.set('inputValue', inputVal)
                .set('fibonacciArr', fibonacciArr)
                .set('duration', duration);
        default:
            return state;
    }
};
