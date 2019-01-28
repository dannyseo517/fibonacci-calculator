import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import fibonacciReducer from 'Reducers/fibonacci';
import thunk from 'redux-thunk';

declare global {
    // tslint:disable interface-name
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__? : typeof compose;
    }
}

const reducers = combineReducers({
    fibonacciReducer,
});

// this allows the chrome redux debugging tool which is great for looking at detailed information on redux's state management
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk),
));

export default store;
