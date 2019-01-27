/// <reference path='./index.d.ts'/>
import React from 'react';
import ReactDOM from 'react-dom';
import Main from 'Components/main';
import { Provider } from 'react-redux';
import store from './store';
import 'Styles/app.scss';

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root'),
);
