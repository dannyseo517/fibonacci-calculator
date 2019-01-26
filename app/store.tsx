import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import testReducer from 'Reducers/test';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    testReducer,
});


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__? : typeof compose;
    }
}
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk),
));

export default store;
