import { REDUX_TEST } from 'Constants/action-types';
import { Map } from 'immutable';

export default (state = Map(), action: any) => {
    switch (action.type) {
        case REDUX_TEST:
            return state.set('message', action.data.text);
        default:
            return state;
    }
};
