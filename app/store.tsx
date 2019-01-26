import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import testReducer from 'Reducers/test';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    testReducer,
});


declare global {
    // tslint:disable interface-name
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__? : typeof compose;
    }
}

// this allows the chrome redux debugging tool which is great for looking at detailed information on redux's state management
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk),
));

export default store;
